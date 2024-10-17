const db = require("../Models");
const User = require("../Models/ีuser.model");
const Role = require("../models/role.model");

checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { username: req.body.username } });
      if (user) {
        return res.status(400).send({ message: "Username is already in use!" });
      }
  
      const email = await User.findOne({ where: { email: req.body.email } });
      if (email) {
        return res.status(400).send({ message: "Email is already in use!" });
      }
  
      next();
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  
  checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!res.includes(req.body.roles[i])) {
          return res.status(400).send({
            message: "Failed! Role does not exist = " + req.body.roles[i],
          });
        }
      }
    }
    next();
  };
  
  const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted,
  };


// ส่งออกอ็อบเจ็กต์ 'verifySignUp' เพื่อให้สามารถนำไปใช้ในที่อื่นได้
module.exports = verifySignUp;