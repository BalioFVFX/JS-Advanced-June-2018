class PaymentManager {
    constructor(title) {
        this.title = title // Used in <caption></caption>
    }

    render(id) {
        let html = $(`<table>
    <caption>${this.title} Payment Manager</caption>
    <thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
   </thead>
    <tbody class="payments">
    </tbody>
    <tfoot class="input-data">
        <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
    </tfoot>
</table>`);
        html.find('.input-data').find('button').on('click', function () {
            let nameInput = $(this).parent().parent('tr').find('input[name=name]');
            let categoryInput = $(this).parent().parent('tr').find('input[name=category]');
            let priceInput = $(this).parent().parent('tr').find('input[name=price]');
            if (nameInput.val() === '' || categoryInput.val() === '' || priceInput.val() === '') {
                return;
            }
            let name = nameInput.val();
            let category = categoryInput.val();
            let price = priceInput.val();
            let button = $(`<button>Delete</button>`).on('click', function () {
                console.log($(this));
                $(this).parent().parent().remove();
            });

            nameInput.val('');
            categoryInput.val('');
            priceInput.val('');

            let obj = $('<tr></tr>');
            obj.append(`<td>${name}</td>`);
            obj.append(`<td>${category}</td>`);
            obj.append(`<td>${Number(price)}</td>`);
            let td = $("<td>");
            td.append(button);
            obj.append(td);

            html.find('.payments').append(obj);

        });
        $(`#${id}`).append(html);
    }
}