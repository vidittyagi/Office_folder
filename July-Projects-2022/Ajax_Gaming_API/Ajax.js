let url = 'https://api.rawg.io/api/games?key=5c14b272c6594eb7857bb4a774e32aef&search=';
async function dataAPIGet(url,value){
    try {
    //USING FETCH
    // let response = await fetch("https://api.rawg.io/api/games?key=5c14b272c6594eb7857bb4a774e32aef&search=" + value);
    // let data = await response.json();
    // // console.log(data);
    // let container = document.querySelector('.container');
    // let gamecard = `
    //     <h1>${data.results[0].name}</h1>
    //     <img class="d-block w-100" src="${data.results[0].background_image}" alt="First slide">
    //     <img class="d-block w-100" src="${data.results[1].background_image}" alt="Second slide">
    //     <img class="d-block w-100" src="${data.results[2].background_image}" alt="Third slide">
    //     `;
    //   //Changing innerHTML of 1st div inside mainDiv class div 
    //   container.innerHTML += gamecard;
      
    //USING AXIOS
    let response = await axios.get(url + value);
    console.log(response);
    let data = await response.data;
    let container = document.querySelector('.container');
    let gamecard = `
        <h1>${data.results[0].name}</h1>
        <img class="d-block w-100" src="${data.results[0].background_image}" alt="First slide">
        <img class="d-block w-100" src="${data.results[1].background_image}" alt="Second slide">
        <img class="d-block w-100" src="${data.results[2].background_image}" alt="Third slide">
        `;
      //Changing innerHTML of 1st div inside mainDiv class div 
      container.innerHTML += gamecard;
    } catch (error) {
        alert(error);
    }
}

async function dataAPIPost(url){
    // FETCH POST NOT WORKING due to public API not allowing access
    // try{
    //     let obj={
    //         background_image:"https://media.rawg.io/media/screenshots/fe0/fe05eb572c48d42b618af1f5ffb513fb.jpg",
    //         name:"HeroVired"
    //     };
    
    //     let response = await fetch(url,{
    //         method:"POST",
    //         headers:{"content/type":"application/json"},
    //         body:JSON.stringify(obj)
    //     });
    //     let data = await response.json();
    //     alert(data);
    // }
    // catch(error){
    //     console.log(error);
    // }


    //AXIOS POST NOT WORKING due to public API not allowing access
    try {
        let obj={
            background_image:"https://media.rawg.io/media/screenshots/fe0/fe05eb572c48d42b618af1f5ffb513fb.jpg",
            name:"HeroVired"
        };
        let response = axios.post(url,obj);
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}


let searchbtn = document.querySelector('.searchBtn');
let inputVal = document.querySelector('#inputBar');

searchbtn.addEventListener("click",()=>{
    //search games like = [minecraft, gta, Fortnite, pubg]
    dataAPIGet(url,inputVal.value);  //Get Request function
    // dataAPIPost(url); //Post Request function
});