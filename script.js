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