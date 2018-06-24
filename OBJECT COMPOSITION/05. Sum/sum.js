function solution() {
    let selector1;
    let selector2;
    let resultSelector;

    function init(sel1, sel2, result) {
        selector1 = $(sel1);
        selector2 = $(sel2);
        resultSelector = $(result);
    }

    function add() {
        resultSelector.val(Number(selector1.val()) + Number(selector2.val()));
    }

    function subtract() {
        resultSelector.val(Number(selector1.val()) - Number(selector2.val()));
    }

    return {
        init: init,
        add: add,
        subtract: subtract
    }
}