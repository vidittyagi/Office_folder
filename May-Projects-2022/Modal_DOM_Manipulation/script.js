let modalDiv = document.querySelector('.modalDiv');
let btn = document.querySelector('#openModal');
let closeBtn = document.querySelector('#closeBtn');
let formModal = document.querySelector('.formModal');
let submitModal = document.querySelector('#submitModal');

//If open modal button clicked fire this event and make visibility = visisble
btn.addEventListener("click",()=>{
    modalDiv.style.visibility = "visible";
});

//If close button is clicked fire this event and make visibility = hidden
closeBtn.addEventListener("click",()=>{
    modalDiv.style.visibility = "hidden";
});


//submit event handler for submission of the title form
submitModal.addEventListener("click",()=>{
    //get title and content input field values and display them in console
    let title = document.querySelector('#titleModalID').value;
    let content = document.querySelector('#contentModalID').value;
    console.log("Title "+title);
    console.log("Content "+content);

    //To view data on next page use document.write
    document.write("Title: " + title);
    document.write("Content: " + content);
});

