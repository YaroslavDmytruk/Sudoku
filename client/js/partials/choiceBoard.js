$(document).ready(function() {
    setChoiceBoardEvenets();
});

function showChoiceBoard() {
    $("#choiceBoard").show();
}

function hideChoiceBoard() {
    $("#choiceBoard").hide();
}

function setChoiceBoardEvenets() {
    $("#container-sudoku .cell").on("click", function() {
        if(!$(this).hasClass("base")) {
            showChoiceBoard();
        }
    });

    $("#choiceBoard .close").on("click", function() {
        hideChoiceBoard();
    });

    $("#choiceBoard .number").on("click", function() {
        console.log("I choosed " + $(this).html());
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
