const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseTitle:{
        type:"String",
        required:"true"
    },
    coursePrice:{
        type:"String",
        required:"true",
    },
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;