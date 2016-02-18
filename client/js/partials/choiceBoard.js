function showChoiceBoard() {
    $("#choiceBoard").show();
}

function hideChoiceBoard() {
    $("#choiceBoard").hide();
}

function setChoiceBoardEvenets() {
    $("#container-sudoku .board__cell").on("click", function () {
        if (!$(this).hasClass("board__cell_base")) {
            showChoiceBoard();
        }
        window.sudoku.x = $(this).data('x');
        window.sudoku.y = $(this).data('y');
        window.sudoku.$obj = $(this);
    });

    $("#choiceBoard .numbers-item__close").on("click", function () {
        hideChoiceBoard();
    });

    $("#choiceBoard .numbers-item__number").on("click", function () {
        console.log("I choosed " + $(this).html());
        window.sudoku.value = parseInt($(this).html(), 10);
        window.sudoku.$obj.html(window.sudoku.value);
        window.sudoku.matrixCurrent[window.sudoku.x][window.sudoku.y] = window.sudoku.value;
        hideChoiceBoard();
    });

    // Click outside numberBoards
    $(document).mouseup(function (e) {
        var container = $("#choiceBoard");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
        }
    });

}
