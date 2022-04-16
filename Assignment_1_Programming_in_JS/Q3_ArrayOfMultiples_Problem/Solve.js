let num = 12;
let length = 10;

//Declared an answer array
let ans = [];

/*
Function Solve takes two parameters num = number
and length = a number till which we have to write multiples of num
*/
function Solve(num,length){
    for(let i=1;i<=length;i++){
        ans.push(num * i);
    }
}

Solve(num,length);
console.log(ans);