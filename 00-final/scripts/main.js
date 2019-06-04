// add to cart & spin on window scroll

function updateCart() {
    var value = parseInt(document.getElementById('cart').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart').value = value;
}


$(function () {
    var hatlogo = $("#hatlogo");
    $(window).scroll(function () {
        if($(window).scrollTop() > 0) {
            hatlogo.addClass("logo-spin");
        }
        
    });
});


