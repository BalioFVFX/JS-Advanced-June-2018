class PublicTransportTable{
    constructor(town){
        this.town = town;
        // Change the caption title
        $('caption').text(`${this.town}'s Public Transport`);
        this.searchButton = $('.search-btn');
        this.clearButton = $('.clear-btn');
        this.clearButton.on('click', this.clearBtnFnc);
        this.searchButton.on('click', this.searchBtnFnc);
    }

    searchBtnFnc(){
        let typeInput = $('input[name=type]').val();
        let nameInput = $('input[name=name]').val();

        if(typeInput || nameInput) {

            let vehs = $('.vehicles-info').children();

            for (let i = 0; i < vehs.length; i++) {

                let busType = $($(vehs[i]).children()[0]).text();
                let busName = $($(vehs[i]).children()[1]).text();
                let buttonName = $($(vehs[i]).children()[2]).children().text();

                if (busType.includes(typeInput) && busName.includes(nameInput)) {
                    $(vehs[i]).css('display', '');
                    if (buttonName === 'Less Info') {
                        i++;
                        $(vehs[i]).css('display', '');
                    }
                    continue;
                }

                $(vehs[i]).css('display', 'none');
                if (buttonName === 'Less Info') {
                    $($(vehs[i]).children()[2]).children().text('More Info');
                    i++;
                    $(vehs[i]).css('display', 'none');
                    $(vehs[i]).remove();
                }
            }
        }

    }

    clearBtnFnc(){
        let typeInput = $('input[name=type]');
        let nameInput = $('input[name=name]');

        typeInput.val('');
        nameInput.val('');
        let vehs = $('.vehicles-info').children();
        for (let i = 0; i < vehs.length; i++) {
            $(vehs[i]).css('display', '');
        }
    }

    addVehicle(obj){
        let vehInfo = $('.vehicles-info');
        let tr = $('<tr>');
        tr.append(`<td>${obj.type}</td>`);
        tr.append(`<td>${obj.name}</td>`);
        let tdButton = $('<td>');
        let button = $('<button>More Info</button>');
        button.on('click', function () {
            let buttonText = $(this).text();
            if(buttonText === 'More Info'){
                let trClass = $('<tr class="more-info">');
                let tdCols = $('<td colspan="3">');
                let table = $('<table>');
                table.append(`<tr><td>Route: ${obj.route}</td></tr>`);
                table.append(`<tr><td>Price: ${obj.price}</td></tr>`);
                table.append(`<tr><td>Driver: ${obj.driver}</td></tr>`);
                tdCols.append(table);
                trClass.append(tdCols);
                trClass.insertAfter($(this).closest('tr'))
                $(this).text('Less Info');
            }
            else{
                $(this).closest('tr').next().remove();


                $(this).text('More Info');
            }
        });
        tdButton.append(button);
        tr.append(tdButton);
        vehInfo.append(tr);
    }
}