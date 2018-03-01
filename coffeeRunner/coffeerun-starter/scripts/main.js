var storageOrders = JSON.parse(localStorage.getItem('orders')) ;

var url = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders';

var orders = {};
var count = 0;

var footer = document.querySelector('footer');

var form = document.querySelector('form');


var displayOrder = function(order) {
    count ++;
    //display orders on the page;
    var div = document.createElement('div');
    div.className = 'order';
    var keys = Object.keys(order);

    //count order
    var pCount = document.createElement('p');
    pCount.textContent = `Order #${count}`;
    pCount.style.fontWeight = 'bold';
    div.appendChild(pCount);

    for (var key of keys) {
        if ( key !== '_id' && key !== '__v') {
            var p = document.createElement('p');
            p.textContent = `${key}: ${order[key]}`

            if (key === 'emailAddress') {
                p.className = 'email';
            }
            div.appendChild(p);
        }
        
    }

    div.addEventListener('click', function(e) {
        div.style.backgroundImage = "url('completed1.png')"; // contain no-repeat 
        div.style.backgroundColor = "rgba(212, 216, 211, 0.603)";
        setTimeout(function() {
            var textEmail = div.querySelector('.email').textContent.slice(14);
            $.ajax({method: 'DELETE', url: url + `/${textEmail}`});
            div.remove();
        }, 1200)
    })
    footer.appendChild(div);
}

// add order to an order list when you 'submit'
form.addEventListener('submit', function(e) {
    e.preventDefault();

    orders[form.emailAddress.value] = {coffee: form.coffee.value,
        emailAddress: form.emailAddress.value,
        size: form.size.value,
        flavor: form.flavor.value,
        strength: form.strength.value
        };

    displayOrder(orders[form.emailAddress.value]);
    console.log(orders[form.emailAddress.value])
    $.post(url, orders[form.emailAddress.value], function(data) {
        console.log('posted');
        console.log(data);
    });
})

form.addEventListener('reset', function(e) {
    orders = [];
    var divOrders = document.querySelectorAll('div.order');
    divOrders.forEach( function(x) {x.remove()})
    $.ajax({method: "DELETE", url: url})
})

$.get(url, function(data) { 
    orders = data;
    for (var key in orders) {
        displayOrder(orders[key]);
    }
});

var repopButton = document.querySelector('button.btn.btn-default.right')
repopButton.addEventListener('click', function(e) {

    for ( var i = 1; i < 6; i++ ) {
        var email = "EMAIL" + i +"@testme.com";

        orders[email] = {
            coffee: "TEST" + i,
            emailAddress: email,
            size: "TEST",
            flavor: "TEST",
            strength: 100
        };

        displayOrder(orders[email]);
        $.post(url, orders[email]);
    }
  
})