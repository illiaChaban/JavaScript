var orders = []

var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    orders.push({coffee: form.coffee.value,
    email: form.emailAddress.value,
    size: form.size.value,
    flavor: form.flavor.value,
    range: form.strength.value
});
})

console.log(orders);