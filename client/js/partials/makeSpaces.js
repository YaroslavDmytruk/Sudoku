function makeSpaces(difficulty, sudoku) {
    var coeffInSudoku = 17,
        coeffInRow = 2,
        numberOfSpaces = difficulty * coeffInSudoku,
        counter = 0;

    while (counter !== numberOfSpaces) {
        makeSpace(sudoku);
    }

    return sudoku;

    function makeSpace(sudoku) {
        var x = randomInteger(0, 8),
            y = randomInteger(0, 8),
            counterX = 0,
            counterY = 0;

        if (sudoku[y][x] === "") {
            return;
        }

        sudoku.forEach(function(arr, i) {
            if (arr[x] === "") {
                counterX++;
            }
        });

        sudoku[y].forEach(function(number, i) {
            if (number === "") {
                counterY++;
            }
        });



        if (counterX < difficulty * coeffInRow && counterY < difficulty * coeffInRow) {
            sudoku[y][x] = "";
            counter++;
        }
    }

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
}
