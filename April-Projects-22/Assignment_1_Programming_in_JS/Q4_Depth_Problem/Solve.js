let arr = [1,2,3,4];

function Solve(arr){
    /*
    Make a Stack which gives us flexibilty of recursion
    Since recursion is basic approach in this problem
    */
    let stack = new Array();
    //ansDepth variable is declared for returning depth of array 
    let ansDepth = 1;
    // push array of zero element into stack 
    stack.push(arr[0]);

    /*
    Now follow the algorithmn that is every time 1 element is pushed in stack 
    and then 2 elements are popped out of it. 
    Every 2 element pop operation will add 1 to ansDepth 
    and then ansDepth will be pushed to stack. 
    Pushing ansDepth back to stack will maintain 
    */

    for(let i=1;i<arr.length;i++){
        if(stack.length == 2){
            stack.pop();
            stack.pop();
            ansDepth++;
            stack.push(ansDepth);
        }
        stack.push(arr[i]);
    }
    return ansDepth;
}

console.log(Solve(arr));