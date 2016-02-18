/**
 * User: Vitalik Kotliar
 * Email: 7vetaly7@ukr.net
 * Date: 18.02.16
 */

function createDOMSudoku(matrixStart) {
    var $container = $('#container-sudoku');
    var htmlTmp = "";

    var length = matrixStart.length;
    for (var i = 0; i < length; i++) {
        htmlTmp = htmlTmp + '<div class="board__row g-clearfix" id="row'+ i +'">'
        var lengthInner = matrixStart.length;
        for (var j = 0; j < lengthInner; j++) {


            htmlTmp = htmlTmp + '<div class="board__cell">'+ matrixStart[i][j] +'</div>';
        }
        htmlTmp = htmlTmp + '</div>';

    }
    var message = $(htmlTmp);
    $container.append(message);
};