const { DataTypes } = require("sequelize");
const sequelize = require("./db"); // Import the sequelize instance

const Course = sequelize.define("Course", {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
    title: { 
    type: DataTypes.STRING, 
    allowNull: false,
    },
    description: { 
    type: DataTypes.STRING, 
    allowNull: false ,
    },
    code: {
      type: DataTypes.STRING,
      unique: true, // รหัสวิชาจะต้องไม่ซ้ำกัน
      allowNull: false
    },    
    creditHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     
    gradeLevel: {
      type: DataTypes.STRING, // เพิ่มฟิลด์ระดับชั้น
      allowNull: false,
  },
    classroom: {
      type: DataTypes.STRING, // เพิ่มฟิลด์ห้องเรียน
      allowNull: true,
  },
});

// Synchronize the model with the database
Course.sync({ force: false }) // Set to true only if you need to drop and recreate the table
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.error("Error creating table", error);
  });

module.exports = Course;