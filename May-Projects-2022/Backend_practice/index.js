const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CourseModel = require('./Schema/schema');
const uri = "mongodb+srv://abcde:12345@nodetuts.xyxsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//Connect with db
mongoose.connect(uri);
var db = mongoose.connection;

app.use((req,res,next)=>{
    console.log("app use");
    next();
});

// app.get("/courses", async (req,res)=>{
//     const Course = await CourseModel.find({});
//     try {
//         res.send(Course);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

app.get("/courses",async(req,res)=>{
    db.once('open', function(){
        var course1 = new CourseModel({courseTitle:"Backend",coursePrice:"2000"});
        course1.save(function(err,course){
            if(err) return console.error(err);
            console.log("Course added");
        });
    });
});

app.get("/home",(req,res)=>{
    res.send("Hello to Frontend");
});

app.post("/home",(req,res)=>{
    res.send("Posted!");
});

app.listen(3000,console.log("Hello from backend"));