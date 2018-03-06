var url = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders';
var orders = {};
var count = 0;

var footer = document.querySelector('footer');
var form = document.querySelector('form');
var repopulateButton = document.querySelector('button.btn.btn-default.right');



orders = fetch(url)
    .then( function(response) {
        return response.json();
    })
    .then( function(data) {
        return Object.values(data)
    })
    .then( function(orders) {
        for ( var order of orders) {
            displayOrder(order)
        }
    })



form.addEventListener('submit', function(e) {
    e.preventDefault();
    var newOrder = createNewOrder(orders);
    displayOrder(newOrder);
    postOrder(url, newOrder);
})

form.addEventListener('reset', function(e) {
    orders = [];
    var divOrders = document.querySelectorAll('div.order');
    divOrders.forEach( function(x) {x.remove()})
    fetch(url, {method: "DELETE"})
})

repopulateButton.addEventListener('click', function(e) {

    for ( var i = 1; i < 6; i++ ) {
        var email = createTestOrder(i);

        displayOrder(orders[email]);
        postOrder(url, orders[email]);
    }
  
})

/////////###############################################################
var postOrder = function(url, order) {
    return fetch(url, {
        body: JSON.stringify(order),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    })
}


var createTestOrder = function(index) {
    var email = "EMAIL" + index +"@testme.com";

        orders[email] = {
            coffee: "TEST" + index,
            emailAddress: email,
            size: "TEST",
            flavor: "TEST",
            strength: 100
        };
    return email;    
}


var createDivOrder = function() {
    var div = document.createElement('div');
    div.className = 'order';
    return div;
}

var createParagraph = function(key, order) {
    var p = document.createElement('p');
    p.textContent = `${key}: ${order[key]}`;

    if (key === 'emailAddress') {
        p.className = 'email';
    }
    return p;
}

var displayCountOrder = function() {
    count++
    var pCount = document.createElement('p');
    pCount.textContent = `Order #${count}`;
    pCount.style.fontWeight = 'bold';
    return pCount;
}

var displayOrder = function(order) {
    var div = createDivOrder();
    //count order
    var pCount = displayCountOrder();
    div.appendChild(pCount);
 
    var keys = Object.keys(order);

    for (var key of keys) {
        if ( key !== '_id' && key !== '__v') {
            var p = createParagraph(key, order);
            div.appendChild(p);
        }
    }
    footer.appendChild(div);

    div.addEventListener('click', function(e) {
        changeBackground(div);
        setTimeout(function() { deleteOrder(div) } , 1200)
    })
}


var changeBackground = function(element) {
    element.style.backgroundImage = "url('completed1.png')"; 
    element.style.backgroundColor = "rgba(212, 216, 211, 0.603)";
}
var deleteOrder = function(div) {
    var textEmail = div.querySelector('.email').textContent.slice(14);
    fetch(url + `/${textEmail}`, {method: 'DELETE'})
    div.remove();
}



var createNewOrder = function(orders) {

    orders[form.emailAddress.value] = {coffee: form.coffee.value,
        emailAddress: form.emailAddress.value,
        size: form.size.value,
        flavor: form.flavor.value,
        strength: form.strength.value
        };

    return orders[form.emailAddress.value];
}





