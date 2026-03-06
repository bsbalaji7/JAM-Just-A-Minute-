import express from "express";
import verifyToken from "./middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", verifyToken, (req, res) => {

  res.json({
    message: "Welcome to your profile",
    userId: req.user.id
  });

});

export default router;
