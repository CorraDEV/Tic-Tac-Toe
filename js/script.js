const player1 = (() => {
    let name = "Player 1"
    let symbol = "X";

    return {name, symbol};
})();

const player2 = (() => {
    let name = "Player 2"
    let symbol = "O";

    return {name, symbol};
})();

const gameboard = (() => {    
    let player_turn = player1.name;
    let winner = "";
    let board = [['','',''],['','',''],['','','']];
    const checkWinner = function(){                
        if(
            board[0][0] == player1.symbol && board[0][1] == player1.symbol && board[0][2] == player1.symbol ||
            board[1][0] == player1.symbol && board[1][1] == player1.symbol && board[1][2] == player1.symbol ||
            board[2][0] == player1.symbol && board[2][1] == player1.symbol && board[2][2] == player1.symbol ||
            board[0][0] == player1.symbol && board[1][0] == player1.symbol && board[2][0] == player1.symbol ||
            board[0][1] == player1.symbol && board[1][1] == player1.symbol && board[2][1] == player1.symbol ||
            board[0][2] == player1.symbol && board[1][2] == player1.symbol && board[2][2] == player1.symbol ||
            board[0][0] == player1.symbol && board[1][1] == player1.symbol && board[2][2] == player1.symbol ||
            board[0][2] == player1.symbol && board[1][1] == player1.symbol && board[2][0] == player1.symbol 
        ){
            this.winner = player1.name;
        }
        else if(
            board[0][0] == player2.symbol && board[0][1] == player2.symbol && board[0][2] == player2.symbol ||
            board[1][0] == player2.symbol && board[1][1] == player2.symbol && board[1][2] == player2.symbol ||
            board[2][0] == player2.symbol && board[2][1] == player2.symbol && board[2][2] == player2.symbol ||
            board[0][0] == player2.symbol && board[1][0] == player2.symbol && board[2][0] == player2.symbol ||
            board[0][1] == player2.symbol && board[1][1] == player2.symbol && board[2][1] == player2.symbol ||
            board[0][2] == player2.symbol && board[1][2] == player2.symbol && board[2][2] == player2.symbol ||
            board[0][0] == player2.symbol && board[1][1] == player2.symbol && board[2][2] == player2.symbol ||
            board[0][2] == player2.symbol && board[1][1] == player2.symbol && board[2][0] == player2.symbol 
        ){
            this.winner = player2.name;
        }                 
    };
    return {player_turn, winner, board, checkWinner};
})();

const table = document.querySelector("#gameboard");
table.addEventListener("click", function(e){
    if(
        e.target.classList.contains("cell") &&
        gameboard.winner == "" &&
        e.target.firstChild.textContent == ""
        ){
        if(gameboard.player_turn == player1.name){
            e.target.firstChild.textContent = player1.symbol;
            gameboard.board[e.target.dataset.y][e.target.dataset.x] = player1.symbol;
            gameboard.player_turn = player2.name;
        }
        else{
            e.target.firstChild.textContent = player2.symbol;
            gameboard.board[e.target.dataset.y][e.target.dataset.x] = player2.symbol;
            gameboard.player_turn = player1.name;
        }
                
        gameboard.checkWinner();        

        if(gameboard.winner != ""){
            const winner_msg = document.createElement("p");
            winner_msg.style.fontSize = "2em";
            winner_msg.style.textAlign = "center";
            winner_msg.textContent = gameboard.winner + " has won";

            player_turn_msg.style.visibility = "hidden";
            document.body.appendChild(winner_msg);
        }                
    }
});

const player_turn_msg = document.createElement('p');
player_turn_msg.textContent = gameboard.player_turn + " turn";
player_turn_msg.style.fontSize = "2em";
player_turn_msg.style.textAlign = "center";
player_turn_msg.style.marginTop = "0.5em";
document.body.insertBefore(player_turn_msg, table);