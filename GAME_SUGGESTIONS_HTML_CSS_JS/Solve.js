//This function makes an API call for showing data on top of the page
async function dataAPI(){
    /*
    There is an Query array which holds different game name queries.
    These queries will be used for making hits on API for data.
    There will be an Randomize function of javascript 
    which will select queries randomly from the array so every time we reload the website
    there will be new query as this dataAPI function will be called again.
    */
    let query = ["Gta5","Batman","Iron Man","Captain America","Far Cry","Avengers","Counter Strike","Minecraft","Hitman","The Witcher","Red Dead Redemption"];
    
    /*
    Now we have used javascript inbuild random function 
    which gives us value between 0 and 1 (Math.random() = number b/w 0 to 1).
    So we have to convert this number to a number which is between 0 to 10 
    for array index use. So that we can use this to randomize array indexes.
    Now we have used Math.floor() for taking out the floor value of the number 
    which we have recieved after muultiplying it by 10.
    Example: - let say random number generated is n = 0.6345434223
    n*10 = 6.345434223, 
    Math.floor() rounds a number DOWN to the nearest integer
    Now take floor = 6 (6.3 floor = 6 and 6.7 floor = 6)
    and add 1 to it.
    */

    let random = Math.floor(Math.random() * 10) + 1;
    // console.log(random);  // Console Statement to view random number generated on browser console

    //Making a call to API using fetch function to fetch data
    let response = await fetch("https://api.rawg.io/api/games?key=5c14b272c6594eb7857bb4a774e32aef&search="+ query[random]);
    //API response in JSON format
    let data = await response.json();

    //Container is the div element that we have to add our Background Image to.
    let container = document.querySelector('.div1');

        /*
        DOM manipulation using innerHTML() functionality in javascript
        or we can also use createElement() to add a new div 
        instead of using previous one
        */
        
        let gamecard = `
        <h1>${data.results[0].name}</h1>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="${data.results[0].background_image}" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="${data.results[1].background_image}" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="${data.results[2].background_image}" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`
      //Changing innerHTML of 1st div inside mainDiv class div 
      container.innerHTML += gamecard;
      
      /*
      We can also use for loop for mapping all data that is coming from API
      for(let i=0;i<data.results.length;i++){
      }
      */
}
dataAPI();

//This Part of File Handles Suggestions
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField'); 

addToDoButton.addEventListener('click',function(){
    //A p tag is created for suggestion text
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    let value = inputField.value;
    if(value == "") return;
    paragraph.innerText = value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
});