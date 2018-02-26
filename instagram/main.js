var images = [{ url:'chaos-game/1.png',
description: 'hello world!',
comments: ['hi to you too', 'wazzap guys', 'me too! me too']},
 {url: 'chaos-game/2.png',
 description: 'my second post!',
 comments: ["you're so awesome!", 'you too', "let's party y'all!!"]
},
  {url: 'chaos-game/3.png',
description: 'people like birds, they poo all the time',
comments: ['agreed', "you're so wise, bro", 'wow! who wrote that?!! so inspiring!']}, {url:'chaos-game/5.png'}, {url: 'chaos-game/6.png'}, {url: 'chaos-game/7.png'}, {url:'chaos-game/8.png'}, {url:'chaos-game/9.png'}, {url:'chaos-game/10.png'}, {url: 'chaos-game/11.png'}, {url: 'chaos-game/12.png'}, {url: 'chaos-game/13.png'}, {url: 'chaos-game/14.png'}, {url: 'chaos-game/15.png'}, {url: 'chaos-game/16.png'}, {url: 'chaos-game/17.png'}, {url: 'chaos-game/18.png'}, {url: 'chaos-game/19.png'}, {url: 'chaos-game/20.png'} ];


var container = document.querySelector('.container');
var hidden = document.querySelector('div.hidden');
var hiddenImage = document.querySelector('div.hidden > img');
var postDiv = document.querySelector('div.post');
var currentIndex;
var describeHere = document.querySelector('div.describe-here');
var commentHere = document.querySelector('div.comment-here');
var br = document.createElement('br');
var arrowRight = document.querySelector("div.hidden>div.arrow.right");
var arrowLeft = document.querySelector("div.hidden>div.arrow.left");
var aTags = document.querySelectorAll('div.arrow a');

// counting number of posts
postDiv.textContent = `${images.length} posts`;

var createComments = function(image) {
    commentHere.textContent = '';
    for (var i = 0; i < image.comments.length; i++) {
        var p = document.createElement('p');
        p.textContent = image.comments[i];
        commentHere.appendChild(p)
    }
}

var commentsNumber = function(image) {
    if (image.comments !== undefined) {
        var count = image.comments.length;
        return count; }
    return '';
    
}

//check if arrows should  be displayed
var checkArrows = function() {
    if (currentIndex >= images.length-1) {
        arrowRight.style.opacity = 0;
    } else { arrowRight.style.opacity = 1;}

    if (currentIndex === 0) {
        arrowLeft.style.opacity = 0;
    } else { arrowLeft.style.opacity = 1;}
}

var closeImage = function(x) {
    if (x.target.localName !== 'img' && x.target.localName !== 'a' && x.target.className !== 'arrow left' && x.target.className !== 'arrow right') {
        hidden.style.display = 'none';
    }
}

var previousImage = function() {
    currentIndex --;

    if (currentIndex < 0) {
        hidden.style.display = 'none';
        return;
    }

    checkArrows();
    
    var newAttr = images[currentIndex].url;
    hiddenImage.setAttribute('src', newAttr );
    describeHere.textContent = images[currentIndex].description;
    createComments(images[currentIndex]);

}

var nextImage = function() {
    currentIndex ++;

    if (currentIndex >= images.length) {
        hidden.style.display = 'none';
        return;
    }
    checkArrows();
    
    var newAttr = images[currentIndex].url;
    hiddenImage.setAttribute('src', newAttr );
    describeHere.textContent = images[currentIndex].description;
    createComments(images[currentIndex]);
}


//display all of the images on the page
images.forEach(function(image) {

    var divImg = document.createElement('div');
    divImg.className = 'image';

    var img = document.createElement('img');
    img.setAttribute('src', image.url);

    var divCover = document.createElement('div');
    divCover.className = 'cover';
    var commentIcon = document.createElement('img');
    commentIcon.setAttribute('src', 'comment-icon.png');
    commentIcon.className = 'icon';
    divCover.appendChild(commentIcon);

    var pCover = document.createElement('p');
    pCover.className = "comments-number";
    pCover.textContent = commentsNumber(image);
    divCover.appendChild(pCover);



    divImg.appendChild(img);

    container.appendChild(divImg);
    container.appendChild(divCover);

    



    // display hidden div when you click on the image
    img.addEventListener('click', function(event) {
        hiddenImage.setAttribute('src', img.src);
        hidden.style.display = 'flex';
        currentIndex = images.indexOf(image);

        console.log(event);

        checkArrows();

        describeHere.textContent = image.description;
        // each comment on dif line
        // image.comments.forEach(function(comment) {
        //     console.log(comment);
        //     comment += "</br>";
        // }) ????????
        createComments(image);
    })

    // img.addEventListener('mouseout', function(x) {
    //     img.style.background = 'black';
    // })
})

aTags.forEach( function(aTag) {
    
    aTag.addEventListener('click', function(e) {
        e.preventDefault();
    })
})

var icons = document.querySelectorAll('img.icon');
icons.forEach( function(icon) {
    
    icon.addEventListener('click', function(e) {
        e.preventDefault();
    })
    icont.addEventListener('mouseenter', function(e) {
        e.preventDefault();
    })
})


hidden.addEventListener('click', closeImage);
arrowLeft.addEventListener('click', previousImage);
arrowRight.addEventListener('click', nextImage);









// try to add number of comments when you hover over picture