//Btn is the button, when user clicks on this button click event will be fired
let Btn = document.querySelector('#iconLower');
//inputBox is the input which is given by the user that will be processed by the chat bot 
let inputBox = document.querySelector("#inputLower");
// This userDisplayPTag is the display screen where user will view query entered by him/her
let userDisplayPTag = document.querySelector(".userReply");
// This robotDisplayPTag is the display screen where user will view the reply by chatbot
let robotDisplayPTag = document.querySelector(".roboReply");


//queries is the static data object which holds hard coded replies pof chatbot
let queries = {
    "What's your name":"My name is Jarvis",
    "How are you doing":"I am fine thank you",
    "Michael Crichton":"Jurassic World Dominion ",
    "Benedict Cumberbatch":"doctor strange",
    "Yash":"K.G.F",
    "Ajay Devgan":"RRR",
    "":"Enter something"
}

//Click event handler
Btn.addEventListener("click",()=>{
    //key is the query entered by user which needs to be searched in queries object
    let key = inputBox.value;
    //chatBotOutput is the variable which will store output value that needs to be displayed by chatbot
    let chatBotOutput = "";

    //check if key exists in queries object
    if(key in queries){
        chatBotOutput = queries[key];
    }
    else{
        chatBotOutput = "Invalid Query. Please enter a valid query";
    }

    //display output in user display box
    userDisplayPTag.innerHTML = 
    `
    ${inputBox.value}
    `;

    //display output in robot display box
    robotDisplayPTag.innerHTML = 
    `
    ${chatBotOutput}
    `;
});




