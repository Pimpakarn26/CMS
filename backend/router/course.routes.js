const express = require('express');
const router = express.Router();
const courseController = require("../Controllers/course.controller");

// Routes
// Create a new course
router.post('/', courseController.create)
router.get('/', courseController.getAll);
router.get('/:id', courseController.getById);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);

module.exports = router;