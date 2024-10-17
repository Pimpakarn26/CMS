const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const courseRouter = require("./Router/course.routes");
const authRouter = require("./Router/auth.routes");
const db = require("./Models");
const role = db.Role;
const cors = require("cors");

const corsOption = {
    origin: "http://localhost:5173",
  };

// ฟังก์ชันสำหรับสร้างบทบาทพื้นฐานในฐานข้อมูล
const initRole = () => {
    role.create({ id: 1, name: "student" });
    role.create({ id: 2, name: "teacher" });
    role.create({ id: 3, name: "admin" });
};

// Middleware for parsing JSON bodies
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ใช้ router สำหรับจัดการเส้นทางcourseและการรับรองความถูกต้อง
app.use('/api/v1/auth', authRouter);
app.use('/api/courses', courseRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello Courses Management</h1>');
});

// // เชื่อมต่อกับฐานข้อมูลและเริ่มเซิร์ฟเวอร์
// db.sequelize.sync().then(() => {
//     app.listen(PORT, () => {
//       console.log("Server is running on http://localhost:" + PORT);
//     });
//   }).catch((err) => {
//     console.log("Error connecting to the database: ", err);
//   });

app.listen(PORT, () => {
    console.log("Listening to http://localhost:" + PORT);
});

