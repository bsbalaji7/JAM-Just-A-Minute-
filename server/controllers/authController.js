import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


/* =========================
   REGISTER USER
========================= */

export const registerUser = async (req, res) => {

  try {

    const { name, email, phone, password } = req.body;

    /* Validate fields */

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    /* Check if user already exists */

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    /* Hash password */

    const hashedPassword = await bcrypt.hash(password, 10);

    /* Create new user */

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword
    });

    /* Save user */

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};



/* =========================
   LOGIN USER
========================= */

export const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    /* Validate input */

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    /* Find user */

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    /* Compare password */

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    /* Generate JWT token */

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    /* Send response */

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};