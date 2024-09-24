const Course = require("../models/course.model");

// Create a new Course
exports.create = async (req, res) => {
    const {
        title,
        description,
        code,
        creditHours,
        gradeLevel,
        classroom
    } = req.body;

    const newCourse = {
        title,
        description,
        code,
        creditHours,
        gradeLevel,
        classroom,
    };

    Course.create(newCourse)
    .then((data)  => {
        res.send(data);
      })
    .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Some error occurred while saving the Course",
        });
      });
};

//Retrieve All Course
exports.findAll = async (req, res) => {
    Financial.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Some error occurred while retrieving the Course",
        });
      });
  };

//Retrieve Course By User ID
exports.findAllByUserID = async (req, res) => {
    const userId = req.params.userId;
    Financial.findAll({ where: { userId: userId } }) // Ensure the column name matches your model
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Some error occurred while retrieving the Course",
        });
      });
  };

exports.findOne = async (req, res) => {
    const id = req.params.id; 

    try {
        const data = await Course.findByPk(id); // Use findByPk to retrieve by primary key
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Course with id=${id}.`,
          });
        }
      } catch (error) {
        res.status(500).send({
          message:
            error.message || `Error retrieving Course with id=${id}.`,
        });
      }
    };

    
  
