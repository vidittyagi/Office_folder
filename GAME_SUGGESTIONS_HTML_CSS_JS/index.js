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
      suggestions:{
        type:String
      },
  });

  const suggestion = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    suggestion: {
      type: String,
      required: true
    }
  });
  
const userdata = connection.model('users',user);
const suggestions = connection.model('suggestion',suggestion);

app.post('/signin',(req,res)=>{

    let userInfo = {
        username:req.body.username,
        password:req.body.password
    }

    userdata.find(userInfo,(err, messages)=> {
        if(err)
            res.send('false');
        else
            res.send('true');
    });
});

app.post('/getSuggestion',(req,res)=>{

  suggestions.find({username: req.body.username},(err, messages)=> {
      if(err)
          res.send('false');
      else{
        console.log(messages);
        res.send(messages[0].suggestion);
      }
  });
});

app.post('/postSuggestion',(req,res)=>{
  console.log(req.body);
  let suggestionData = {
    username: req.body.username,
    suggestion: req.body.suggestion
  }

  const doc = new suggestions(suggestionData);
    doc.save((err) =>{
        if(err)
            res.send('false');
        else
            res.send('true');
      })
});


app.post('/postGameScore',(req,res)=>{
    console.log(req.body);
    let gameData = {
      username: req.body.username,
      gameScore : req.body.gameScore,
    }
  
    const doc = new gamescore(gameData);
      doc.save((err) =>{
          if(err)
              res.send('false');
          else
              res.send('true');
        })
  
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


