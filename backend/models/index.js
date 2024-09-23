const sequelize = require("./db")
const Sequelize = require("sequelize");
const Course =require("./Course.Model")

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Course = Course;

module.exports = db