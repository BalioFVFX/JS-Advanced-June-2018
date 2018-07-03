class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this.value = '';
        this.tetsprop = '123';
        this.elements = $(this.selector);
        this._invalidSymbols = regex;
        $(this.elements).on('input', function () {
            $(selector).val($(this).val());
        })
    }

    get value() {
        return $(this.selector).val();
    }

    set value(newVal) {
        $(this.selector).val(newVal);
        this._value = newVal;
    }

    isValid() {
        return !this.value.match(this._invalidSymbols);
    }
}


let textbox = new Textbox(".password", /[^a-zA-Z0-9]/);
let inputs = $('.password');
inputs.on('input', function () {
    console.log(textbox.value);
});