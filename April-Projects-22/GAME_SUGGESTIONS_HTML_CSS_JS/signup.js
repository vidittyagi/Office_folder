let usrname = document.querySelector('#username-field');
let pass = document.querySelector('#password-field');
let loginBtn = document.querySelector('#login-form-submit');
let mob = document.querySelector('#mobile-field');
let email = document.querySelector('#email-field');

loginBtn.addEventListener("click" , async function(e){
    e.preventDefault();
    //fetch post request on api during sign up
    let userObj ={
        username : usrname.value,
        password : pass.value,
        mob: mob.value,
        email:email.value
    }

    let response = await fetch('http://localhost:3000/signup',{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(userObj)
    });

    let data = await response.text();
    // console.log(data);
    if(data === 'true'){
        window.location.assign("./Login.html");
    }
    else{
    alert("INVALID CREDENTIALS");
    }
});