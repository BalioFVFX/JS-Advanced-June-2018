function search() {
    let search = $('#searchText');
    let founded = $(`#towns > li:contains(${search.val()})`);
    $('#towns > li').css('fontWeight', 'normal');
    founded.css('fontWeight', 'bold');
    $('#result').text(`${founded.length} matches found.`);
    search.val('');
}