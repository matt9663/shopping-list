$(function() {
$( '#js-shopping-list-form' ).submit(function(event) {
    event.preventDefault();
    const listAddition = [$('input').val()];
    $('.shopping-list').append('<li><span class="shopping-item">' + listAddition + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
})
$('ul').on('click', '.shopping-item-toggle', function() {
    $(this).parent().prev().toggleClass("shopping-item__checked");
})
$('ul').on('click', '.shopping-item-delete', function() {
    $(this).parent().parent().remove('li');
})
});