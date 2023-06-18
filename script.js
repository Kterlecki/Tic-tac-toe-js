let currentPlayer = "X";
let playerXScore = 0;
let playerOScore = 0;

function handleCellClick(event){
    const cell = event.target

    if(!cell.textContent.trim())
    {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        scoreCheck();
        updateCurrentPlayerText();
    }
}

function updateCurrentPlayerText(){
    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.textContent = "Current Player: " + currentPlayer;
}

function resetGame(){
    const cells = document.querySelectorAll("table td");
    cells.forEach((cell) => {
        cell.textContent = "";
    });

    currentPlayer = "X";
    updateCurrentPlayerText();
}

function scoreCheck(){
    const cells = document.querySelectorAll("table td");
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    for (let combination of winningCombinations){
        const [a, b, c ] = combination;

        if(
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent &&
            cells[a].textContent.trim() !== ""
        ) {
            handleWin(cells[a].textContent);
            return;
        }
    }
    if (Array.from(cells).every((cell) => cell.textContent.trim() !== "")) {
        handleDraw();
    }
    
}

function handleDraw(){
    alert("Its a draw!");
    resetGame();
}

function handleWin(winningPlayer){

    if(winningPlayer === "X"){
        playerXScore++;
    } else if (winningPlayer === "O"){
        playerOScore++;
    }
    alert("Player " + winningPlayer + " wins!");
    updateScore();
    resetGame();
}

function updateScore(){
    const playerXScorePageElement = document.getElementById("playerXScore");
    const playerOScorePageElement = document.getElementById("playerOScore");

    playerXScorePageElement.textContent = "Player X score: " + playerXScore;
    playerOScorePageElement.textContent = "Player O score: " + playerOScore;
}