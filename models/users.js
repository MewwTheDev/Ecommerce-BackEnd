const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    addresses: { type: String },
    resetPasswordToken: { type: String, default: "" },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;