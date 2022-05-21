const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost:27017/myapp');

const connection = mongoose.connection;
//schema
const user = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    mobileNo: {
        type:String,
        required:true
    },
    review: {
        type : Number,
        required: true
    },
});

//model
const UserGrocery = connection.model('UserGrocery',user);


app.post('/review', (req,res)=>{
    let userReview = {
        username:req.body.username,
        mobileNo:req.body.mobileNo,
        review:req.body.review
    }
    console.log("POST/Review");
    console.log(userReview);
    let doc = new UserGrocery(userReview);
    doc.save((err)=>{
        console.log(userReview);
        if(err) {
            res.send('false');
        }
        else res.sendFile('true');
    })
});


app.listen(3000,()=>{console.log('Server started at port 3000')});




