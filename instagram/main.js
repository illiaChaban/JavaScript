var images = [{ url:'chaos-game/1.png'}, {url: 'chaos-game/2.png'}, {url: 'chaos-game/3.png'}, {url:'chaos-game/5.png'}, {url: 'chaos-game/6.png'}, {url: 'chaos-game/7.png'}, {url:'chaos-game/8.png'}, {url:'chaos-game/9.png'}, {url:'chaos-game/10.png'}, {url: 'chaos-game/11.png'}, {url: 'chaos-game/12.png'}, {url: 'chaos-game/13.png'}, {url: 'chaos-game/14.png'}, {url: 'chaos-game/15.png'}, {url: 'chaos-game/16.png'}, {url: 'chaos-game/17.png'}, {url: 'chaos-game/18.png'}, {url: 'chaos-game/19.png'}, {url: 'chaos-game/20.png'} ];

var container = document.querySelector('.container');
var hidden = document.querySelector('div.hidden');
var hiddenImage = document.querySelector('div.hidden > img');
var currentIndex;


images.forEach(function(image) {

    var img = document.createElement('img');
    img.setAttribute('src', image.url);
    container.appendChild(img);

    img.addEventListener('click', function(event) {
        hiddenImage.setAttribute('src', img.src);
        hidden.style.display = 'flex';
        currentIndex = images.indexOf(image);
    })
})


var closeImage = function(x) {
    console.log(x);
    if (x.target.localName !== 'img' && x.target.localName !== 'a' && x.target.className !== 'arrow left' && x.target.className !== 'arrow right') {
        hidden.style.display = 'none';
    }
}

hidden.addEventListener('click', closeImage);

//get previous image

var arrowLeft = document.querySelector("div.hidden>div.arrow.left");

var previousImage = function() {
    currentIndex --;

    if (currentIndex < 0) {
        var hidden = document.querySelector('div.hidden');
        hidden.style.display = 'none';
        return;
    }
    
    var newAttr = images[currentIndex].url;
    hiddenImage.setAttribute('src', newAttr );
}

arrowLeft.addEventListener('click', previousImage);

//get next image

var arrowRight = document.querySelector("div.hidden>div.arrow.right");

var nextImage = function() {
    currentIndex ++;

    if (currentIndex >= images.length) {
        hidden.style.display = 'none';
        return;
    }

    //trying to stop displaying the arrow once it reaches the end

    // if (indexOfImage >= images.length-1) {
    //     arrowRight.style.display = 'none';
    //     return;
    // }
    
    var newAttr = images[currentIndex].url;
    hiddenImage.setAttribute('src', newAttr );
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