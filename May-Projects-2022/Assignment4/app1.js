var form = document.getElementById("newUserInfo");

form.addEventListener("submit", function (formSubmit) {
    formSubmit.preventDefault();
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
    //fetch post request
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: name,
        body: email,
        id: phone,
      }),
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        alert("Data submitted");
        console.log(data);
      });
  });