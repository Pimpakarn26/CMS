const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Role = sequelize.define("roles", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = Role;