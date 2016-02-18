/**
 * User: Vitalik Kotliar
 * Email: 7vetaly7@ukr.net
 * Date: 18.02.16
 */



window.sudoku = {};
window.sudoku.matrixStart = createSudoku();
;

$(document).ready(function () {
    console.log("ready");



    var $levels = $('#levels');

    $('#easy').click(function(){
        window.sudoku.matrixCurrent = makeSpaces(1,window.sudoku.matrixStart);
        createDOMSudoku(window.sudoku.matrixCurrent);
        setChoiceBoardEvenets();
        $levels.fadeOut();
    });
    $('#medium').click(function(){
        window.sudoku.matrixCurrent = makeSpaces(2,window.sudoku.matrixStart);
        createDOMSudoku(window.sudoku.matrixCurrent);
        setChoiceBoardEvenets();
        $levels.fadeOut();
    });
    $('#hard').click(function(){
        window.sudoku.matrixCurrent = makeSpaces(3,window.sudoku.matrixStart);
        createDOMSudoku(window.sudoku.matrixCurrent);
        setChoiceBoardEvenets();
        $levels.fadeOut();
    });
});

console.log("in main");