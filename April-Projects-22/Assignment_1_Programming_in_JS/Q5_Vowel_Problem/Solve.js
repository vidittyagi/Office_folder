// let letter = 's';
// let allWordsArray = [
//     'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
// ];
// let vowels = ['a','i','e','o','u'];

// function Solve(letter){
//     //Loop over vowels array to check for a vowel
//     for(let i=0;i<vowels.length;i++){
//         /*
//         if letter itself is a vowel 
//         than return it from here
//         */
//         if(letter == vowels[i]){
//             return letter;
//         }
//         /*
//         else search in right and left side of the allWordsArray
//         using for loop.
//         */
//         else{
//             //first find the position of letter in allWordsArray
//             let position = 0;
//             for(let i=0;i<26;i++){
//                 if(letter == allWordsArray[i]){
//                     position = i;
//                 }
//             }

//             //Now search in left side of letter in allWordsArray
//             let leftStepsCount = 0;
//             let lans = "";
//             for(let i=position-1;i>=0;i--){
//                 leftStepsCount++;
//                 for(let j=0;j<vowels.length;j++){
//                     if(allWordsArray[i] == vowels[j]){
//                         lans = vowels[j];
//                         // return vowels[j];
//                     }
//                 }
//             }

//             //Now search in right side of letter in allWordsArray
//             let rans = "";
//             let rightStepsCount = 0;
//             for(let i=0;i<position;i++){
//                 rightStepsCount++;
//                 for(let j=0;j<vowels.length;i++){
//                     if(allWordsArray[i] == vowels[j]){
//                         rans = vowels[j];
//                         // return vowels[j];
//                     }
//                 }
//             }

//             /* 
//             //In both cases given in if condition below. lans will be returned 
//             that is why written one else block instead of this if block in comments  
//             if(leftStepsCount == rightStepsCount || leftStepsCount < rightStepsCount){
//                 return lans;
//             }
//             */
//             if(leftStepsCount > rightStepsCount){
//                 return rans;
//             }
//             else{
//                 return lans;
//             }
            
//         }
//     }
// }

// console.log(Solve(letter));

function nearestVowel(s) {
    let obj = { a: 99, e: 99, i: 99, o: 99, u: 99 };
    let min = 99;
    let sol = "";
    for (let char of [..."aeiou"]) {
      let diff = Math.abs(char.charCodeAt(0) - s.charCodeAt(0));
      if (diff < min) {
        min = diff;
        sol = char;
      }
    }
    return sol;
  }

  console.log(nearestVowel("i"));