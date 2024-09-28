const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const courseRouter = require("./Router/course.routes");

// Middleware for parsing JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello Courses Management</h1>');
});

app.use('/api/courses', courseRouter);

app.listen(PORT, () => {
    console.log("Listening to http://localhost:" + PORT);
});
