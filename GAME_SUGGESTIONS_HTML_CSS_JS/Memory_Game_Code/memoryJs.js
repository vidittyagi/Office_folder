const c = document.querySelectorAll('.cell');//cards
const f = document.querySelectorAll('.front');//front
const con = document.querySelector('.container');//container
const s = document.querySelector('.score span');//score



ImageShuffling();
onClickEventByUser();

//This function is used to shuffle images randomly
function ImageShuffling(){
    c.forEach(c=>{
        const num = [...Array(c.length).keys()];
        const random = Math.floor(Math.random()*c.length);
        c.style.order = num[random];
    })
}


/*
This event handles user click on a particular div 
which shows symbol inside it.
*/
function onClickEventByUser(){
    for(let i =0; i<c.length; i++){
        f[i].classList.add('show');
        setInterval(() => {
            f[i].classList.remove('show')
        }, 2000);

        c[i].addEventListener('click' ,()=>{
            f[i].classList.add('flip')
           const filppedc = document.querySelectorAll('.flip')

            if(filppedc.length == 2){
                con.style.pointerEvents ='none'
                setInterval(() => {
                    con.style.pointerEvents ='all'
                }, 1000);
                match(filppedc[0] , filppedc[1])
            }
        })
    }
}


/*
This function compares two cards that they match or not
*/
function match(firstCard , secondCard){
    if(firstCard.dataset.index == secondCard.dataset.index){
        s.innerHTML = parseInt(s.innerHTML) + 1;
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip'); 

        firstCard.classList.add('match');
        secondCard.classList.add('match');
    }else{
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip'); 
        }, 1000);
    }
}