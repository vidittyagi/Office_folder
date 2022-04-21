const express = require('express');
let nocors = require('cors');
const app = express();
app.use(nocors());

//To handle Json data
app.use(express.json());
//To handle Form data
app.use(express.urlencoded({extended: false}));

app.post('/signin',(req,res)=>{
    console.log(req.body);
    if(req.body.username === 'abc' && req.body.password ==='123' ){
        res.send('true');
    }else{
        res.send('false');
    }
});

app.post('/signup',(req,res)=>{

});

app.listen(3000,()=>{console.log('server started at port 3000')});