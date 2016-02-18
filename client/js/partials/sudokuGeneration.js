function createSudoku() {
    var constSudoku = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7, 8, 9, 1],
        [5, 6, 7, 8, 9, 1, 2, 3, 4],
        [8, 9, 1, 2, 3, 4, 5, 6, 7],
        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [6, 7, 8, 9, 1, 2, 3, 4, 5],
        [9, 1, 2, 3, 4, 5, 6, 7, 8]
    ];

    for (var i = 0; i < 50; i++) {
        for (var index = 0; index < 3; index++) {
            swapRow(index * 3, index * 3 + 2, constSudoku);
            swapColumn(index * 3, index * 3 + 2, constSudoku);
        }
    }

    return constSudoku;

    function swapRow(firstRow, thirdRow, constSudoku) {
        var firstRandomRow = randomInteger(firstRow, thirdRow),
            secondRandomRow = randomInteger(firstRow, thirdRow),
            temp = [];

        for (var columnIndex = 0; columnIndex < 9; columnIndex++) {
            temp[columnIndex] = constSudoku[firstRandomRow][columnIndex];
            constSudoku[firstRandomRow][columnIndex] = constSudoku[secondRandomRow][columnIndex];
            constSudoku[secondRandomRow][columnIndex] = temp[columnIndex];
        }
    }

    function swapColumn(firstColumn, thirdColumn, constSudoku) {
        var firstRandomColumn = randomInteger(firstColumn, thirdColumn),
            secondRandomColumn = randomInteger(firstColumn, thirdColumn),
            temp = [];

        for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
            temp[rowIndex] = constSudoku[rowIndex][firstRandomColumn];
            constSudoku[rowIndex][firstRandomColumn] = constSudoku[rowIndex][secondRandomColumn];
            constSudoku[rowIndex][secondRandomColumn] = temp[rowIndex];
        }
    }

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
}
