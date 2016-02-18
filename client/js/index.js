/**
 * User: Vitalik Kotliar
 * Email: 7vetaly7@ukr.net
 * Date: 18.02.16
 */



window.sudoku = {};
window.sudoku.matrixStart = createSudoku();
window.sudoku.matrixCurrent = window.sudoku.matrixStart;

$(document).ready(function () {
    console.log("ready");
    createDOMSudoku(window.sudoku.matrixStart);
});

console.log("in main");