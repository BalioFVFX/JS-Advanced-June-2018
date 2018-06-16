function attachEvents() {
    $('#items li').on('click', function () {
        if ($(this).attr('data-selected')) {
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '');
        }
        else {
            $(this).attr('data-selected', true);
            $(this).css('background-color', '#DDD');
        }
    });
    $('#showTownsButton').on('click', function () {
        $('#selectedTowns').text(`Selected towns: ${$('#items li[data-selected=true]').toArray().map(t => $(t).text()).join(', ')}`);
    });
}