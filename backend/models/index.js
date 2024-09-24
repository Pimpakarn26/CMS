const sequelize = require("./db")
const Sequelize = require("sequelize");
const User = require("./user.model");
const Role = require("./role.model")

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Course = Course;

db.User = User; // เก็บโมเดลผู้ใช้
db.Role = Role; // เก็บโมเดลบทบาท

module.exports = db