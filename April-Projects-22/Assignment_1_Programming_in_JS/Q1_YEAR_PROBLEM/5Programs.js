//Taking input from user
let year = window.prompt("Enter A Two Digit Year");
//Declared a global variable for storing answer
let ans = "";

//safety check if user enters a invalid number
if(year.length > 2){
    document.write("Invalid Input");
}

/*
conditional check as given in question
if year is less than 35 then it is an 2000 year category
*/
if(year < 35){
    ans += 20 + year;
}
//else it is an 19 century category
else{
    ans += 19 + year;
}

//displaying output on browser
document.write("Ans to the problem is " + ans);