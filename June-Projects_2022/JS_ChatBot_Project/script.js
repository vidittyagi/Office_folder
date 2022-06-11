//Btn is the button, when user clicks on this button click event will be fired
let Btn = document.querySelector('#iconLower');
//inputBox is the input which is given by the user that will be processed by the chat bot 
let inputBox = document.querySelector("#inputLower");
// This userDisplayPTag is the display screen where user will view query entered by him/her
let userDisplayPTag = document.querySelector(".userReply");
// This robotDisplayPTag is the display screen where user will view the reply by chatbot
let robotDisplayPTag = document.querySelector(".roboReply");


//queries is the static data object which holds hard coded replies pof chatbot
let queries = [
    {
        request:["What's","your","name"],
        response:"My name is Jarvis"
    },
    {
        request:["How", "are", "you", "doing"],
        response:"I am fine thank you"
    },
    {
        request:["Michael", "Crichton"],
        response:"Jurassic World Dominion"
    },
    {
        request:["Benedict","Cumberbatch"],
        response:"Doctor Strange"
    },
    {
        request:["Yash"],
        response:"K.G.F"
    },
    {
        request:["Ajay", "Devgan"],
        response:"RRR"
    },
];

//Click event handler
Btn.addEventListener("click",()=>{
    //key is the query entered by user which needs to be searched in queries object
    let key = inputBox.value;
    //chatBotOutput is the variable which will store output value that needs to be displayed by chatbot
    let chatBotOutput = "";

    //check if key exists in queries object
    let newKey = key.trim();
    let arr = newKey.split(" ");
    for(let i=0;i<queries.length;i++){
        let obj = queries[i];
        for(let j=0;j<arr.length;j++){
            if(obj.request.includes(arr[j])){
                chatBotOutput = obj.response;
            }
        }
    }

    if(chatBotOutput == ""){
        chatBotOutput = "No Result Found";
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

    inputBox.value = "";
});



