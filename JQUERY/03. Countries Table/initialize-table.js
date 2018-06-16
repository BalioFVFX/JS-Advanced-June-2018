function initializeTable() {
    $('#createLink').on('click', appendCountry);
    let tables = $('#countriesTable');

    createHTML('Bulgaria', 'Sofia');
    createHTML('Germany', 'Berlin');
    createHTML('Russia', 'Moscow');
    validateButtons();

    function createHTML(country, capital) {
        tables.append($('<tr>')
            .append($('<td>').text(`${country}`))
            .append($('<td>').text(`${capital}`))
            .append($('<td>').append($('<a>').on('click', moveUp).attr('href', '#').text('[Up]'))
                .append($('<a>').on('click', moveDown).attr('href', '#').text('[Down]'))
                .append($('<a>').on('click', deleteElement).attr('href', '#').text('[Delete]'))
            ));

    }

    function appendCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        createHTML(country.val(), capital.val());
        country.val('');
        capital.val('');

    }

    function moveUp() {
        $(this).parent().parent().insertBefore($(this).parent().parent().prev());
        validateButtons();
    }

    function moveDown() {
        $(this).parent().parent().insertAfter($(this).parent().parent().next());
        validateButtons();
    }

    function deleteElement() {
        $(this).parent().parent().remove();
        validateButtons();
    }

    function validateButtons() {
        $(tables).children().children('tr').children('td').children('a').css('display', '');
        $(tables).children().children('tr:eq(2)').children('td:eq(2)').children('a:eq(0)').css('display', 'none');
        $(tables).children().children('tr:last').children('td:eq(2)').children('a:eq(1)').css('display', 'none');
    }
}