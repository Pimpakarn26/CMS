const jwt = require("jsonwebtoken");
const config = require("../Config/auth.config");
const db = require("../Models");
const User = db.User;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};

const checkRole = (role) => {
    return (req, res, next) => {
        User.findByPk(req.userId).then((user) => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            user.getRoles().then((roles) => {
                const roleNames = roles.map((r) => r.name);
                if (roleNames.includes(role)) {
                    next();
                } else {
                    res.status(403).send({ message: `Require ${role.charAt(0).toUpperCase() + role.slice(1)} Role!` });
                }
            });
        });
    };
};

const isAdmin = checkRole("admin");
const isTeacher = checkRole("teacher");
const isAdminOrTeacher = (req, res, next) => {
    User.findByPk(req.userId).then((user) => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        user.getRoles().then((roles) => {
            const roleNames = roles.map((r) => r.name);
            if (roleNames.includes("admin") || roleNames.includes("teacher")) {
                next();
            } else {
                res.status(403).send({ message: "Require Admin or Teacher Role!" });
            }
        });
    });
};

const authJwt = {
    verifyToken,
    isAdmin,
    isTeacher,
    isAdminOrTeacher,
};
module.exports = authJwt;