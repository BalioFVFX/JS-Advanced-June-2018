function domSearch(section, sensetive) {
    let container = $(section);
    let fragment = document.createDocumentFragment();

    // Controls
    let addControlsDiv = $('<div>');
    $(addControlsDiv).addClass('add-controls');
    let labelEnterText = $('<label>Enter text:</label>');
    $(labelEnterText).appendTo(addControlsDiv);
    let inputField = $('<input>');
    $(inputField).appendTo(addControlsDiv);
    let anchor = $('<a>Add</a>');
    $(anchor).attr('href', '#');
    $(anchor).addClass('button');
    $(anchor).css('text-decoration', 'none');
    $(anchor).on('click', appendText);
    $(anchor).appendTo(addControlsDiv);



    // Search




    let searchDiv = $('<div>');
    $(searchDiv).addClass('search-controls');
    let searchLabel = $('<label>Search:</label>');
    $(searchLabel).appendTo(searchDiv);
    let searchInput = $('<input>');
    $(searchInput).on('input', searchList);
    $(searchInput).appendTo(searchDiv);

    // Results

    let resultsDiv = $('<div>');
    $(resultsDiv).addClass('result-controls');
    let list = $('<ul>');
    $(list).addClass('items-list');
    $(list).appendTo(resultsDiv);

    function appendText(){
        let text = $(inputField).val();
        $(inputField).val('');
        let xButton = $('<a>X</a>');
        $(xButton).attr('href', '#');
        $(xButton).css('text-decoration', 'none');
        $(xButton).on('click', function () {
            $(this).parent().remove();
        });
        $(xButton).addClass('button');
        let item = $('<li>');
        $(item).append(xButton);
        $(item).addClass('list-item');
        $(item).append(`<strong>${text}</strong>`);
        $(list).append(item);
    }

    function searchList(){
        let currentText = $(this).val();
        if(sensetive){
            $(list).each(function (index, value) {

                $(this).children('li').each(function (){
                    if($(this).text().indexOf(currentText) !== -1){
                        $(this).css('display', '');
                    }
                    else{
                        $(this).css('display', 'none');

                    }
                });

            });
        }
        else{

            $(list).each(function (index, value) {
                $(this).children('li').each(function (){
                    if($(this).text().toUpperCase().indexOf(currentText.toUpperCase()) !== -1){
                        $(this).css('display', '');
                    }
                    else{
                        $(this).css('display', 'none');
                    }
                });

            });
        }
    }

    $(addControlsDiv).appendTo(fragment);
    $(searchDiv).appendTo(fragment);
    $(resultsDiv).appendTo(fragment);
    $(container).append(fragment)
}