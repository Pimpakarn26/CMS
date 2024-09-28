const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth.controller");
const { verifySignUp } = require("../Middleware");

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

// กำหนดเส้นทางสำหรับการสมัครสมาชิก (signup)
// ตรวจสอบ middleware verifySignUp ว่ามีการ import อย่างถูกต้องและมีการใช้งานฟังก์ชัน `checkDuplicateUsernameOrEmail` และ `checkRolesExisted` ในไฟล์ `verifySignUp.js`
router.post(
    "/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail, 
        verifySignUp.checkRolsExisted
    ],
    authController.signup
);

// เส้นทางสำหรับการเข้าสู่ระบบ (signin)
router.post("/signin", authController.signin);

module.exports = router;
  

