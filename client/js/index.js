/**
 * User: Vitalik Kotliar
 * Email: 7vetaly7@ukr.net
 * Date: 18.02.16
 */



window.sudoku = {};
window.sudoku.matrixStart = createSudoku();
window.sudoku.matrixCurrent = makeSpaces(1,window.sudoku.matrixStart);

$(document).ready(function () {
    console.log("ready");
    createDOMSudoku(window.sudoku.matrixCurrent);
    setChoiceBoardEvenets();

});

console.log("in main");