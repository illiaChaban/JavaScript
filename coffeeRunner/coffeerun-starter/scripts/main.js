var storageOrders = JSON.parse(localStorage.getItem('orders')) ;
var orders = storageOrders !== null ? storageOrders : [] ; 

var footer = document.querySelector('footer');

var form = document.querySelector('form');


var displayOrder = function(order, i) {

    //display orders on the page;
    var div = document.createElement('div');
    div.className = 'order';
    var keys = Object.keys(order);

    //count order
    var pCount = document.createElement('p');
    pCount.textContent = `Order #${i+1}`;
    pCount.style.fontWeight = 'bold';
    div.appendChild(pCount);

    for (var key of keys) {
        var p = document.createElement('p');
        p.textContent = `${key}: ${order[key]}`
        div.appendChild(p);
    }

    div.addEventListener('click', function(e) {
        if (div.style.backgroundImage === '') {
            
            div.style.backgroundImage = "url('completed1.png')"; // contain no-repeat 
            div.style.backgroundColor = "rgba(212, 216, 211, 0.603)";
        } else {
            orders.splice(i, 1);
            localStorage.setItem('orders', JSON.stringify(orders));
            div.remove();
        }
    })
    // div.style.backgroundImage = "url('completed1.png')";
    footer.appendChild(div);
}




// add order to an order list when you 'submit'
form.addEventListener('submit', function(e) {
    e.preventDefault();
    orders.push({coffee: form.coffee.value,
    email: form.emailAddress.value,
    size: form.size.value,
    flavor: form.flavor.value,
    range: form.strength.value
    });

    displayOrder(orders[orders.length - 1], orders.length - 1);

    localStorage.setItem('orders', JSON.stringify(orders));
})

form.addEventListener('reset', function(e) {
    orders = [];
    localStorage.setItem('orders', JSON.stringify(orders));
    var divOrders = document.querySelectorAll('div.order');
    divOrders.forEach( function(x) {x.remove()})
})

orders.forEach( displayOrder);