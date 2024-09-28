const Course = require("../Models/course.model");

// Create a new course
exports.create = async (req, res) => {
  // console.log(req.body); 
  try {
    const { name, type, code, creditHours, gradeLevel, classroom } = req.body;
    console.log('Creating course with data:', { name, type, code, creditHours, gradeLevel, classroom });

    const newCourse = await Course.create({
      name,
      type,
      code,
      creditHours,
      gradeLevel,
      classroom,
    });
    

    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
};

// Get all courses
exports.getAll = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving courses', error });
  }
};

// Get a course by ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving course', error });
  }
};

// Update a course
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, code, creditHours, gradeLevel, classroom } = req.body;

    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    await course.update({
      name,
      type,
      code,
      creditHours,
      gradeLevel,
      classroom,
    });

    res.status(200).json({ message: 'Course updated successfully', course });
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error });
  }
};

// Delete a course
exports.delete= async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    await course.destroy();
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
};