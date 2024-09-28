const config = require("../Config/auth.config");
const db = require("../Models");
const User = db.User;
const Role = db.Role;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

// ฟังก์ชันสำหรับการลงทะเบียนผู้ใช้ใหม่
exports.signup = async (req, res) => {
    console.log("Received signup request:", req.body); 
    // รับค่าที่ต้องการจาก body ของ request
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send({
            message: "Please provide all required fields", // ส่งสถานะ 400 และข้อความแจ้งเตือนหากข้อมูลไม่ครบถ้วน
        });
    }

    // เตรียมข้อมูลผู้ใช้ใหม่
    const newUser = {
        username: username,
        email: email,
        password: bcrypt.hashSync(password, 8), // เข้ารหัสรหัสผ่านด้วย bcrypt
    };

    try {
        // บันทึกผู้ใช้ใหม่ลงในฐานข้อมูล
        const user = await User.create(newUser);

        if (req.body.roles) {
            const roles = await Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles,
                    },
                },
            });
            await user.setRoles(roles);
        } else {
            // Set default role to user (e.g., user role ID 3)
            await user.setRoles([3]);
        }

        res.send({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Something went wrong while registering a new user!",
        });
    }
};

// ฟังก์ชันสำหรับการเข้าสู่ระบบ
exports.signin = async (req, res) => {
    // รับค่าที่ต้องการจาก body ของ request
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            message: "Please provide all required fields", // ส่งสถานะ 400 และข้อความแจ้งเตือนหากข้อมูลไม่ครบถ้วน
        });
    }

    try {
        const user = await User.findOne({
            where: { username: username },
        });

        if (!user) {
            return res.status(404).send({ message: "User not found." }); // ส่งสถานะ 404 หากไม่พบผู้ใช้
        }

        // ตรวจสอบรหัสผ่าน
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid password!", // ส่งสถานะ 401 หากรหัสผ่านไม่ถูกต้อง
            });
        }

        // สร้าง token สำหรับการเข้าสู่ระบบ
        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400, // token จะหมดอายุใน 24 ชั่วโมง
        });

        // เตรียม roles ของผู้ใช้
        const authorities = [];
        const roles = await user.getRoles();
        for (let i = 0; i < roles.length; i++) {
            authorities.push("ROLES_" + roles[i].name.toUpperCase());
        }

        // ส่งข้อมูลผู้ใช้กลับไป
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            roles: authorities,
            accessToken: token,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Something error occurred while logging in.",
        });
    }
};
