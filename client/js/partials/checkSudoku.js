function checkSudoku(sudoku) {
    for (var i = 0; i < 9; i++) {
        if (!checkRow(i) || !checkColumn(i) || !checkBlock(i)) {
            return false;
        }
    }

    return true;

    function checkRow(i) {
        var tempObj = {};

        sudoku[i].forEach(function(number, index) {
        	if (number === "") {
        		return false;
        	}

            tempObj[number] = true;
        })

        return Object.keys(tempObj).length === 9;
    }

    function checkColumn(i) {
        var tempObj = {};

        sudoku[i].forEach(function(number, index) {
        	if (number === "") {
        		return false;
        	}

            tempObj[number] = true;
        })

        return Object.keys(tempObj).length === 9;
    }

    function checkBlock(i) {
        var tempObj = {},
            x, y;

        if (i < 3) {
            x = i*3;
            y = 0;
        } else if (i < 6) {
            x = (i-3)*3;
            y = 3;
        } else if (i < 9) {
            x = (i-6)*3;
            y = 6;
        }

        for (var indexForX = x; indexForX < x+3; indexForX++) {
            for (var indexForY = y; indexForY < y+3; indexForY++) {
            	if (sudoku[indexForY][indexForX] === "") {
	        		return false;
	        	}
                tempObj[sudoku[indexForY][indexForX]] = true;
            }
        }       

        return Object.keys(tempObj).length === 9;
    }
};