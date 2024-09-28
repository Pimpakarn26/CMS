const express = require('express');
const router = express.Router();
const courseController = require("../Controllers/course.controller");
const authJwt = require("../Middleware/authJwt");

// //----- Routes -----//
// // สร้างหลักสูตร
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], courseController.create); // ต้องเป็นผู้ดูแล
// // ดึงข้อมูลหลักสูตรทั้งหมด
router.get('/', [authJwt.verifyToken], courseController.getAll); // ต้องเข้าสู่ระบบ
// // ดึงข้อมูลหลักสูตรตาม ID
router.get('/:id', [authJwt.verifyToken], courseController.getById); // ต้องเข้าสู่ระบบ
// // อัปเดตข้อมูลหลักสูตร
router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin],  courseController.update); // ต้องเป็นผู้ดูแล
// // ลบหลักสูตร
router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], courseController.delete); // ต้องเป็นผู้ดูแล

module.exports = router;