const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


mongoose.connect('mongodb://localhost:27017/ImageStore');
const connection = mongoose.connection;

const imageSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
    },
    url:{
        type:String,
        required:true
    }
});

const imageModel = new mongoose.model("imageModel",imageSchema);

app.post("/addImage",(req,res)=>{
    let imageObj = {
        id:req.body.id,
        name:req.body.name,
        url:req.body.url
    }

    let doc = new imageModel(imageObj);
    doc.save((err)=>{
        if(err)
        res.send('Data Not Received');
        else
        res.send('Success');
    });
});

app.get("/getImage", (req, res)=>{
    imageModel.find({},(err,result)=>{
        if(err)
            console.log(err);
        else{
            res.send(result);
        }
    });
});


app.listen(port, ()=>{console.log(`Hello from backend ${port}`)});