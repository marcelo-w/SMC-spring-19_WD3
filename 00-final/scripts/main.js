// add to cart

function updateCart() {
    var value = parseInt(document.getElementById('cart').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('cart').value = value;
    console.log(updateCart);
}