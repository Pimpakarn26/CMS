const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const courseRouter = require("./router/course.routes");
const authRouter = require("./router/auth.routes");
const db = require("./models");
const cors = require("cors");
const role = db.Role;

const corsOption = {
  origin: "http://localhost:5173",
};

// Initialize roles in the database
const initRole = () => {
  role.create({ id: 1, name: "student" });
  role.create({ id: 2, name: "teacher" });
  role.create({ id: 3, name: "admin" });
};

// Use middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routers
app.use("/api/v1/auth", authRouter); // เส้นทางสำหรับการลงทะเบียนและเข้าสู่ระบบ
app.use("/api/v1/courses", courseRouter); // เส้นทางสำหรับการจัดการหลักสูตร

app.get("/", (req, res) => {
  res.send("<h1>Hello Course Management API</h1>"); // เปลี่ยนข้อความให้เหมาะสม
});

// Sync database and initialize roles
// db.sequelize.sync({ force: false }).then(() => {
//   initRole();
//   console.log("Database synced and roles initialized.");
// });

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
