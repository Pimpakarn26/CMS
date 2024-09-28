require("dotenv").config({ path: "./.env" });
console.log('Connecting to database with the following config:');
module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  

// module.exports = {
//   HOST: "ep-crimson-smoke-a1dffu5z-pooler.ap-southeast-1.aws.neon.tech",
//   USER: "default",
//   PASSWORD: "NBU4wlXQmre1",
//   DB: "verceldb",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
