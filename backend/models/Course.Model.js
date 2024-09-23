const { DataTypes } = require("sequelize");
const sequelize = require("./db"); // Import the sequelize instance

const Course = sequelize.define("Course", {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
    name: { 
    type: DataTypes.STRING, 
    allowNull: false,
    },
    description: { 
    type: DataTypes.STRING, 
    allowNull: false ,
    },
    startDate: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    },
    endDate: { 
    type: DataTypes.DATE,
    allowNull: false ,
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