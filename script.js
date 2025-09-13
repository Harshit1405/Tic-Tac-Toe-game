let currentPlayer = "X";
let arr = Array(9).fill(null)
function checkWinner() {

    if (
        (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) || //row 1 ke liye hai
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) || //row 2
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) || //row 3
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) || //col 1 ke liye hai
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) || //col 2
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) || //col 3
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) || //Diagonal 1
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])  //Diagonal 2
    ) {
        document.write(`Winner is ${currentPlayer}`)
    }


    if (!arr.some((e) => e === null)) {
        confirm("Draw")
        return
    }
}
function handleClick(el) {

    let id = Number(el.id)
    if (arr[id] !== null) return //agr block pura feel hai to egnore krta hai
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner()
    currentPlayer = currentPlayer === "X" ? "O" : "X"
}
// (function reset() {
//     window.location.reload();

// })
function reset() {
    // 1. Array ko clean krne ke liye
    arr = Array(9).fill(null);

    // 2. pure cells ko khali krne ke liye
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerText = "";
    }
}