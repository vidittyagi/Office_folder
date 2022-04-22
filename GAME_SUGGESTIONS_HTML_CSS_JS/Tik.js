//This event will be fired as soon as the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    //These are selectors that we are bringing from html
    //Take an array of t
    const t = Array.from(document.querySelectorAll('.tile'));
    //take pd span which displays which player's turn is it 
    const pd = document.querySelector('.display-player');
    //Reset button resets the game to initail state
    const rb = document.querySelector('#reset');
    /*
    an announces which player won at end of game 
    this is hidden in the starting and will become visible on UI
    when the game is ended.
    */
    const an = document.querySelector('.announcer');

    //We will create an array board which will act as board for us 
    let board = ['', '', '', '', '', '', '', '', ''];
    /*
    Maintain a variable cp that will help us to know 
    which player's turn is it zero(0) or Cross(X)
    */
    let cp = 'X';//currentPlayer

    //This activeGame variable will help us to know if user is still playing game or not 
    let activeGame = true; //is Game Active

    //These variables will help us to understand state of players at end of game
    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';



    /*
    MAIN CODE START: - 
    1. First function[t.forEach()] = start reading the code from this function.
    This functoion is on 131 line no in this file
    */




    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
        This is an array of array which will dictate winning conditions for players
    */
   //Winning Condition
    const wC = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    /*
    In this function we are checking 
    if at this certain position of x,y coordinate the user has won or not
    By putting a for loop and checking in that certain row (a,b,c) 
    if all is x or all is 0 then make userWonThisRound true
    and later check if userWonThisRound is true then make Playerxwon variable announce or display
    */

    async function handleResult() {
        let userWonThisRound = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = wC[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                userWonThisRound = true;
                break;
            }
        }

    if (userWonThisRound){
            let winningPerson = '';
            let wp = '';
            if(cp === 'X'){
                wp = PLAYERX_WON;
                winningPerson = 'X';
            }
            else{
                wp = PLAYERO_WON;
                winningPerson = '0';
            }

            announce(wp);
            activeGame = false;

            let gameWinnerobj = {
                gameWinner : winningPerson
            }

            let response = await fetch('http://localhost:3000/postGameScore',{
                method:"POST",
                headers:{"content-type": "application/json"},
                body:JSON.stringify(gameWinnerobj)
            });
            let data = await response.text();
            console.log(data);
            return;
        }

    //If no empty string is left then display Tie
    if (!board.includes(''))
        announce(TIE);
    }

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                an.innerHTML = '<span style="color:"red" class="playerO">Player Won O</span>';
                break;
            case PLAYERX_WON:
                an.innerHTML = '<span style="color:"red" class="playerX">Player X Won</span>';
                break;
            case TIE:
                an.innerText = 'Tie';
        }
        an.classList.remove('hide');
    };


    const isValid = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }
        return true;
    };

    const update =  (index) => {
        board[index] = cp;
    }

    const playerChange = () => {
        pd.classList.remove(`player${cp}`);
        cp = cp === 'X' ? 'O' : 'X';
        pd.innerText = cp;
        pd.classList.add(`player${cp}`);
    }

    /*
    User Action function takes 2 parameters
    tile div and index of tile div.
    1. Then this function calls isValid() function 
    to check if action by user is valid or not.
    By checking if user is not again clicking on tile 
    which is already filled with 0 or X.

    2. Then it changes the tile state on UI
    according to the current player that is playing either to 0 or X
    
    3. So in third step add current player classList to tile 
    we are not using if condition here we are using template string literal
    4. Then call update() function to update board with the current player's activity.
    5. Then we will check that we have winner or not using handleResult()
    6. Then we have change player method helps in changing player's turn
    for example : - 
    if X player's turn is going on, then X has played 
    now we have to change turn to 0 then 0 will play
    This is acheived by removing x from pd ClassList
    and adding 0 to it.
    */
    const actionByUser = (tile, index) =>{
        if(isValid(tile) && activeGame){
            tile.innerText = cp;
            tile.classList.add(`player${cp}`);
            update(index);
            handleResult();
            playerChange();
        }
    }
    
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        activeGame = true;
        an.classList.add('hide');

        if (cp === 'O') {
            playerChange();
        }

        t.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    /*
    Used JavaScript ForEach function which will take each tile div
    and attach a click event on it as soon as user clicks on tile,
    an actionByUser function will be called where tile div 
    and index of that tile will be given as parameters 
    */
    t.forEach( (tile, index) => {
        tile.addEventListener('click', () => actionByUser(tile, index));
    });

    rb.addEventListener('click', resetBoard);
});