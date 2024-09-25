const Course = require("../models/course.model");

// Create and Save new course
exports.create = async (req, res) => {
  const { 
    name, 
    description, 
    code, 
    creditHours, 
    gradeLevel, 
    classroom 
  } = req.body;
// Validate data
  if (!name || !description || !code || !creditHours || !gradeLevel || !classroom) {
    return res.status(400).send({
      message: "Name, Description, Code, CreditHours, GradeLevel or Classroom can't be empty!",
    });
  }

// ตรวจสอบว่ามีวิชาที่มีรหัสวิชาเดียวกันอยู่แล้วหรือไม่
  await Course.findOne({ where: { code: code } }).then((course) => {
    if (course) {
      return res.status(400).send({
        message: "Course with this code already exists!",
      });
    }

// Create a new Course
  const newCourse = {
    name,
    description,
    code,
    creditHours,
    gradeLevel,
    classroom,
  };

  Course.create(newCourse)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something went wrong while creating the course!",
      });
    });
  });
};

// Get all courses
// ดึงข้อมูลวิชาทั้งหมด
exports.getAll = async (req, res) => {
  await Course.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something went wrong while retrieving the courses!",
      });
    });
};

// Get course by ID
// ดึงข้อมูลวิชาตาม ID
exports.getById = async (req, res) => {
  const id = req.params.id;

  await Course.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "No course found with ID : " + id,
        });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something went wrong while retrieving the course!",
      });
    });
};

// Update course by ID
// แก้ไขข้อมูลวิชาตาม ID
exports.update = async (req, res) => {
  const id = req.params.id;

  await Course.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Course was updated successfully!" });
      } else {
        res.send({
          message:
            "Can't update course with ID : " + id + ". Maybe course wasn't found or req.body is empty!",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something went wrong while updating the course!",
      });
    });
};

// Delete course by ID
// ลบวิชาตาม ID
exports.delete = async (req, res) => {
  const id = req.params.id;

  await Course.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Course was deleted successfully!" });
      } else {
        res.send({ message: "Can't delete course with ID : " + id + ". Maybe course wasn't found!" });
      }
    });
};