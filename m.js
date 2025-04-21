//DOM
// adjust quantity of items in cart
document.querySelectorAll('plus-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        let quantity = parseInt(btn.parentElement.querySelector('quantity').innerText);
        quantity++;
        btn.parentElement.querySelector('quantity').innerText = quantity;
    });
});
document.querySelectorAll('minus-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        let quantity = parseInt(btn.parentElement.querySelector('quantity').innerText);
        if (quantity > 1) {
            quantity--;
            btn.parentElement.querySelector('quantity').innerText = quantity;
        }
    });
});
// remove item from cart
document.querySelectorAll('remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        let item = btn.parentElement.parentElement;
        item.parentElement.removeChild(item);
    });
});
// like item
document.querySelectorAll('like-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        let item = btn.parentElement.parentElement;
        item.classList.toggle('liked');
        if (item.classList.contains('liked')) {
            btn.innerText = 'Unlike';
        } else {
            btn.innerText = 'Like';
        }
    });
});
// update total price
function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach((item) => {
        let price = parseFloat(item.querySelector('.price').innerText);
        let quantity = parseInt(item.querySelector('.quantity').innerText);
        total += price * quantity;
    });
    document.querySelector('.total-price').innerText = total.toFixed(2);
}