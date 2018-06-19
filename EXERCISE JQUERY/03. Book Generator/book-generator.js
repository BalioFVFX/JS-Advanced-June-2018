function createBook(selector, title, author, isbn) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let titleParagraph = $('<p>').text(title).addClass('title');
    let authorParagraph = $('<p>').text(author).addClass('author');
    let isbnParagraph = $('<p>').text(isbn).addClass('isbn');
    let selectButton = $('<button>Select</button>');
    let deselectButton = $('<button>Deselect</button>');
    let div = $('<div>');

    let id = Array.from($('#wrapper div')).length;
    id++;
    div.attr('id', `book${id}`);

    // Events

    selectButton.on('click', function () {
        let item = $(this).parent()[0];
        $(item).css('border', '2px solid blue');
    });

    deselectButton.on('click', function () {
        let item = $(this).parent()[0];
        $(item).css('border', 'none');
    });

    titleParagraph.appendTo(fragment);
    authorParagraph.appendTo(fragment);
    isbnParagraph.appendTo(fragment);
    selectButton.appendTo(fragment);
    deselectButton.appendTo(fragment);
    div.append(fragment);

    container.append(div);
}