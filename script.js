let currentPlayer = "X";

function handleCellClick(event){
    const cell = event.target

    if(!cell.textContent.trim())
    {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateCurrentPlayerText();
    }
}

function updateCurrentPlayerText(){
    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.textContent = "Current Player :" + currentPlayer
}

function resetGame(){
    const cells = document.querySelectorAll("table td");
    cells.forEach((cell) => {
        cell.textContent = "";
    });

    currentPlayer = "X";
    updateCurrentPlayerText();
}
// reset button for the grid so thhat you can re enter stuff