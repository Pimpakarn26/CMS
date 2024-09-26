const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller"); // ไฟล์ควบคุมที่ต้องสร้างสำหรับการลงทะเบียนและเข้าสู่ระบบ
const {verifySignUp} = require("../middleware");

// CORS middleware
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// ลงทะเบียนผู้ใช้ใหม่
router.post("/signup", 
  [
    verifySignUp.checkDuplicateUsernameOrEmail, // ตรวจสอบซ้ำชื่อผู้ใช้และอีเมล
    verifySignUp.checkRolsExisted // ตรวจสอบบทบาท
  ], 
  authController.signup
);

// ลงชื่อเข้าใช้
router.post("/signin", authController.signin);

module.exports = router;
