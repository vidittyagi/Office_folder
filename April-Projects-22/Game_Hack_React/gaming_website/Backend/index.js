const express = require('express');
const app = express();
const cors = require('cors');
var mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/myapp');

const connection = mongoose.connection;
  const user = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    mob: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true
      },
  });

const userdata = connection.model('users',user);

app.post('/signin',(req,res)=>{
    // console.log(req);
    let userInfo = {
        username:req.body.username,
        password:req.body.password
    }

    userdata.find(userInfo,(err, messages)=> {
        if(messages.length == 0){
            res.send('false');
        }
        else
            res.send('true');
    });
});

app.post('/signup',(req,res)=>{
    let user = {
        username:req.body.username,
        password:req.body.password,
        mob:req.body.mob,
        email:req.body.email
    }
    const doc = new userdata(user);
    doc.save((err) =>{
        if(err)
            res.send('false');
        else
            res.send('true');
        
      })
});
app.listen(3000,()=>{console.log('server started at port 3000')});