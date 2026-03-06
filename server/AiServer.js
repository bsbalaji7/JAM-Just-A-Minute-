import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import axios from "axios";

import { GoogleGenerativeAI } from "@google/generative-ai";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

/* ---------------- FILE UPLOAD ---------------- */

const upload = multer({
  dest: "uploads/"
});

/* ---------------- ROOT ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("🚀 JAM Backend Running Successfully");
});

/* ---------------- EXISTING ROUTES ---------------- */

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

/* ---------------- GEMINI AI SETUP ---------------- */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const geminiModel = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
You are JAM AI Stylist for the JAM (Just A Minute) e-commerce platform.

Your tasks:
- Analyze uploaded user images
- Detect body structure
- Detect skin tone
- Suggest dress colors
- Suggest clothing styles
- Recommend JAM store products

Reply format:

## Style Analysis
Explain body type and skin tone.

## Best Colors
List colors suitable for the user.

## Best Dress Types
Recommend clothing styles.

## JAM Product Suggestions
Suggest clothing items available in JAM store.
`
});

/* ---------------- AI CHAT API ---------------- */

app.post("/api/chat", upload.single("image"), async (req, res) => {
  try {

    const message = req.body.message || "Suggest dress for me";

    const parts = [{ text: message }];

    if (req.file) {

      const imageBuffer = fs.readFileSync(req.file.path);

      parts.push({
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: req.file.mimetype
        }
      });

      fs.unlinkSync(req.file.path);
    }

    /* ---------------- TRY GEMINI ---------------- */

    try {

      const result = await geminiModel.generateContent({
        contents: [
          {
            role: "user",
            parts
          }
        ]
      });

      const reply = result.response.text();

      return res.json({ reply });

    } catch (geminiError) {

      console.log("Gemini quota exceeded → switching to OpenRouter");

      /* ---------------- OPENROUTER FALLBACK ---------------- */

      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "mistralai/mistral-7b-instruct",
          messages: [
            {
              role: "system",
              content:
                "You are JAM AI Stylist. Suggest dress colors, clothing styles and fashion advice."
            },
            {
              role: "user",
              content: message
            }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const reply = response.data.choices[0].message.content;

      return res.json({ reply });
    }

  } catch (error) {

    console.error("AI ERROR:", error);

    res.status(500).json({
      reply: "⚠️ AI server error"
    });

  }
});

/* ---------------- MONGODB CONNECTION ---------------- */

if (!MONGO_URI) {
  console.error("❌ MONGO_URI missing in .env");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI, {
    serverSelectionTimeoutMS: 10000
  })
  .then(() => {

    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  })
  .catch((err) => {

    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);

  });