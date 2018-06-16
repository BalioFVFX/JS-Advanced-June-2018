function extractText() {
    let items = $('#items > li').toArray().map(t => t.textContent).join(', ');
    $('#result').text(items);
}