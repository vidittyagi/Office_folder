let usrname = document.querySelector('#username-field');
let pass = document.querySelector('#password-field');
let loginBtn = document.querySelector('#login-form-submit');

loginBtn.addEventListener("click" , async function(e){
    e.preventDefault();
    //fetch post request on api during sign up
    let userObj ={
        username : usrname.value,
        password : pass.value,
    }

    let response = await fetch('http://localhost:3000/signin',{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(userObj)
    });

    let data = await response.text();
    // console.log(data);
    if(data === 'true'){
        let objname = userObj.username;
        // console.log(objname);
        localStorage.setItem('userObjectFromLoginPage',objname);
        window.location.assign("./index.html");
    }
    else{
    alert("INVALID CREDENTIALS");
    }
});