let result = (function() {

    class Textbox {
        constructor(selector, regex) {
            this.selector = selector;
            this.value = '';
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

    class Form {
        constructor(){
            this._elemen = $(`<div class="form"></div>`);
            this._textboxes = [];

            for (let i = 0; i < arguments.length; i++) {
                // Check if the argument is instance of the class Textbox
                if (!arguments[i] instanceof Textbox) {
                    throw new Error('Argument is not a Textbox');
                }
                this._textboxes.push(arguments[i]);

                // Remove the inputs from the old div and insert in the new one
                $(this._elemen).append($(arguments[i].elements.remove()))
            }
        }
        submit(){
            let returnVal = true;
            for (let i = 0; i < this._textboxes.length; i++) {
                for (let j = 0; j < this._textboxes.length; j++) {
                    if(this._textboxes[i].isValid()){
                        $($(this._textboxes[i])[0].elements[j]).css('border', '2px solid green')
                    }
                    else{
                        $($(this._textboxes[i])[0].elements[j]).css('border', '2px solid red');
                        returnVal = false;
                    }

                }

            }
            return returnVal;
        }
        attach(selector){
            $(selector).append(this._elemen);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;

let text = new Textbox(".text",/[^a-zA-Z0-9]/);
let name = new Textbox(".name",/[^a-zA-Z]/);
let textInputs = $('.text');
let nameInputs = $('.name');
textInputs.eq(0).val('Gosho');
textInputs.eq(0).trigger('input');
nameInputs.eq(0).val('pass123');
nameInputs.eq(0).trigger('input');
let form = new Form(text,name);
form.attach("#root");
let root = $('#root');