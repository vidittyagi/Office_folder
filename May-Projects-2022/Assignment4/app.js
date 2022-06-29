var storeData;
console.log("In the JS File");
fetch("https://jsonplaceholder.typicode.com/users")
.then(function (fetchRespo) {
  console.log(fetchRespo);
  return fetchRespo.json();
})
.then(function (fetchData){
  console.log(fetchData);
  var user;
  for (user = 0; user < fetchData.length; user++) {
    console.log(fetchData[user].username);
    console.log(fetchData[user].email);
  }
  storeData = fetchData;
  //renderHtml(fetchData);
})
.catch(function (Error) {
  console.log("Error");
});

var j = 0;
var k = 5;
var htmlString = "";
btn.addEventListener("click", function () {
    renderHtml(storeData, j);
    if(j < storeData.length - 1){
        j = j+5;
    }else{
        j = 0;
    }
});



function renderHtml(data, j) {
    htmlString = "";
    for (var i=j; i < j+k; i++) {
      //    console.log(data[i].name);
      htmlString +=
        "<p>" + "Name: "+data[i].name +"<br> Username:"+data[i].username+"<br> Email:"+data[i].email+"<br>";
      htmlString += "Address: "+data[i].address.street+" , "+data[i].address.suite+" , "+data[i].address.city+" , "+data[i].address.zipcode;
      htmlString += "<br> Geo: "+data[i].address.geo.lat+" , "+data[i].address.geo.lng;
      htmlString += "<br> Phone: "+data[i].phone+"<br>Website: "+data[i].website+"<br>Company: "+data[i].company.name+" , "+data[i].company.catchPhrase+" , "+data[i].company.bs+"<br>";
      
      htmlString += `My name is ${data[i].name} and I live in ${data[i].address.street}, ${data[i].address.suite}, ${data[i].address.city}, ${data[i].address.zipcode} . And you can contact me through email at $email`;

      htmlString += ".</p>";

    }
    //userInfo.insertAdjacentHTML("beforeend", htmlString);
    userInfo.innerHTML = htmlString;
  }