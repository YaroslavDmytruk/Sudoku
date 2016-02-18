function submitSudoku() {
    if(checkSudoku(window.sudoku.matrixCurrent)) {
        alert("You are Batman! Correct Sudoku!");
    }
    else {
        alert("Wrong Sudoku! :(");
    }
}
