var images = ['chaos-game/1.png', 'chaos-game/2.png', 'chaos-game/3.png', 'chaos-game/5.png', 'chaos-game/6.png', 'chaos-game/7.png', 'chaos-game/8.png', 'chaos-game/9.png', 'chaos-game/10.png', 'chaos-game/11.png', 'chaos-game/12.png', 'chaos-game/13.png', 'chaos-game/14.png', 'chaos-game/15.png', 'chaos-game/16.png', 'chaos-game/17.png', 'chaos-game/18.png', 'chaos-game/19.png', 'chaos-game/20.png' ];

var container = document.querySelector('.container');

// for (var i =0; i < images.length; i++) {
//     var img = document.createElement('img');
//     img.setAttribute('src', images[i]);
//     img.src = images[i];
//     // img.setAttribute('alt', images[i]);
//     container.appendChild(img);
// }


images.forEach(function(image) {

    var img = document.createElement('img');
    img.setAttribute('src', image);
    img.src = image;
    // img.setAttribute('alt', images[i]);
    container.appendChild(img);
    

})


var imgs = document.querySelectorAll('div.container > img');


// var show = function(x) {
//     console.log('clicked!');
//     console.log(x);
// };

var showImage = function(x) {
    var image = document.querySelector('div.hidden > img');
    
    var attr = x.target.getAttribute('src');
    image.setAttribute('src', attr );

    //highlight selected image
    // x.target.style.boxShadow = "3px 3px 15px rgba(140, 48, 143, 0.418)";

    var hidden = document.querySelector('div.hidden');
    hidden.style.display = "flex";
}




imgs.forEach(function(img){
    img.addEventListener('click', showImage);
})




// var hiddenImage = document.querySelector("div.hidden > img");

// var closeImage = function(x) {
//     console.log(x)
//     if (x.target !== 'img') {
//         var hidden = document.querySelector('div.hidden');
//         hidden.style.display = 'none';
//     }
// }

// hiddenImage.addEventListener('click', closeImage)

var hiddenDiv = document.querySelector("div.hidden");

var closeImage = function(x) {
    console.log(x);
    if (x.target.localName !== 'img' && x.target.localName !== 'a' && x.target.className !== 'arrow left' && x.target.className !== 'arrow right') {
        var hidden = document.querySelector('div.hidden');
        hidden.style.display = 'none';
    }
}

hiddenDiv.addEventListener('click', closeImage);

//get previous image

var arrowLeft = document.querySelector("div.hidden>div.arrow.left");

var previousImage = function(x) {
    var image = document.querySelector('div.hidden > img');
    
    var attr = image.getAttribute('src');
    
    var indexOfImage = images.indexOf(attr);
    
    indexOfImage --;

    if (indexOfImage < 0) {
        var hidden = document.querySelector('div.hidden');
        hidden.style.display = 'none';
        return;
    }
    
    var newAttr = images[indexOfImage];
    image.setAttribute('src', newAttr );
}

arrowLeft.addEventListener('click', previousImage);

//get next image

var arrowRight = document.querySelector("div.hidden>div.arrow.right");

var nextImage = function(x) {
    var image = document.querySelector('div.hidden > img');
    
    var attr = image.getAttribute('src');
    
    var indexOfImage = images.indexOf(attr);
    
    indexOfImage ++;

    if (indexOfImage >= images.length) {
        var hidden = document.querySelector('div.hidden');
        hidden.style.display = 'none';
        return;
    }

    //trying to stop displaying the arrow once it reaches the end

    // if (indexOfImage >= images.length-1) {
    //     arrowRight.style.display = 'none';
    //     return;
    // }
    
    var newAttr = images[indexOfImage];
    image.setAttribute('src', newAttr );
}

arrowRight.addEventListener('click', nextImage);

//block a tag from clicking
var aTags = document.querySelectorAll('div.arrow a');

// var prevent = function(e) {
//     e.preventDefault();
// }

aTags.forEach( function(aTag) {
    
    aTag.addEventListener('click', function(e) {
        e.preventDefault();
    })
})