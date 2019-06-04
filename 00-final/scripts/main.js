// add to cart - change number

function updateCart() {
    var value = parseInt(document.getElementById('cart').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart').value = value;
}

// spin on window scroll down - black & white pages only


$(function () {
    var hatlogo = $("#hatlogo");
    $(window).scroll(function () {
        if($(window).scrollTop() > 0) {
            hatlogo.addClass("logo-spin");
        }
        
    });
});


