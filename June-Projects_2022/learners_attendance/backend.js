const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost:27017/newapp');

const connection = mongoose.connection;
//schema
const leanersDashBoard = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    mob:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
});

const learnerInfoSchema = new mongoose.Schema({
    rowCount:{
        type:Array,
        required:true
    },
    theads:{
        type:Array,
        required:true
    },
});

//model
const UserLeaners = connection.model('UserLeaners',leanersDashBoard);
const TableData = connection.model('TableData',learnerInfoSchema);

app.post('/signup', (req,res)=>{
    let userDetails = {
        username:req.body.username,
        password:req.body.password,
        mob:req.body.mob,
        email:req.body.email
    }

    // console.log(userDetails);
    let doc = new UserLeaners(userDetails);

    doc.save((err)=>{
        console.log(userDetails);
        if(err){
            console.log(err);
            res.send('false');
        }
        else res.send('true');
    })
});

//login
app.post('/', (req,res)=>{
    let userDetails = {
        username:req.body.username,
        password:req.body.password,
    }
    console.log(userDetails);
    UserLeaners.find(userDetails,(err,messages)=>{
        if(messages.length == 0){
            res.send("false");
        }
        else{
            res.send('true');
        }
    });
});


app.post("/tablechangedata",(req,res)=>{
    let data = {
        rowCount:req.body.rowCount,
        theads:req.body.theads,
    }
    // console.log(data);
    let doc = new TableData(data);
    doc.save((err)=>{
        console.log(data);
        if(err) res.send('false');
        else res.send('true');
    });
});

app.get("/gettablechangedata",(req,res)=>{
    TableData.find({},(err,messages)=>{
        if(messages.length == 0){
            res.send("No Data");
        }
        else{
            // console.log(messages);
            res.send(messages);
        }
    });
});

app.listen(3000,()=>{console.log('Server started at port 3000')});