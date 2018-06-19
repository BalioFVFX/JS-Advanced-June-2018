function increment(selector) {

    let container = $(selector);
    let fragments = document.createDocumentFragment();

    let textarea = $('<textarea>');
    let incrementButton = $('<button>Increment</button>');
    let addButton = $('<button>Add</button>');
    let list = $('<ul>');

    //Attributes and classes

    $(textarea).prop('disabled', true);
    $(textarea).prop('value', 0);
    $(textarea).addClass('counter');

    $(incrementButton).addClass('btn');
    $(incrementButton).attr('id', 'incrementBtn');
    $(addButton).addClass('btn');
    $(addButton).attr('id', 'addBtn');

    $(list).addClass('results');


    // Events
    $(incrementButton).on('click', function () {
        let currentVal = Number($(textarea).val());
        currentVal++;
        $(textarea).val(currentVal);
    });

    $(addButton).on('click', function () {
        let li = $('<li>');
        let currentVal = Number($(textarea).val());
        $(li).text(currentVal);
        $(list).append(li);
    });


    textarea.appendTo(fragments);
    incrementButton.appendTo(fragments);
    addButton.appendTo(fragments);
    list.appendTo(fragments);

    container.append(fragments);

}