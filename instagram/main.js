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


var $container = $('.container');
var $hidden = $('div.hidden');
var $hiddenImage = $('div.hidden > img');
var $postDiv = $('div.post');
var currentIndex;
var $describeHere = $('div.describe-here');
var $commentHere = $('div.comment-here');
var $br = $('<br>');
var $arrowRight = $("div.hidden>div.arrow.right");
var $arrowLeft = $("div.hidden>div.arrow.left");

var $aTags = $('div.arrow a');







// counting number of posts
$postDiv.text(`${images.length} posts`);

var createComments = function(image) {
    $commentHere.text('');
    if (image.comments !== undefined) {
        for (var i = 0; i < image.comments.length; i++) {
            var p = $('<p>');
            p.text(image.comments[i]);
            $commentHere.append(p)
        }
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
        $arrowRight.css('opacity', 0);
    } else { $arrowRight.css('opacity', 1);}

    if (currentIndex === 0) {
        $arrowLeft.css('opacity', 0);
    } else { $arrowLeft.css('opacity', 1);}
}

var closeImage = function(x) {
    var target = $(x.target)
    if (target.not('img') && target.not('a') && target.className !== 'arrow left' && x.target.className !== 'arrow right') {
        $hidden.css('display', 'none');
    }
}

var previousImage = function() {
    currentIndex --;

    if (currentIndex < 0) {
        $hidden.css('display', 'none');
        return;
    }

    checkArrows();
    
    var newAttr = images[currentIndex].url;
    $hiddenImage.attr('src', newAttr );
    $describeHere.text(images[currentIndex].description);
    createComments(images[currentIndex]);

}

var nextImage = function() {
    currentIndex ++;

    if (currentIndex >= images.length) {
        $hidden.css('display', 'none');
        return;
    }
    checkArrows();
    
    var newAttr = images[currentIndex].url;
    $hiddenImage.attr('src', newAttr );
    $describeHere.text(images[currentIndex].description);
    createComments(images[currentIndex]);
}


//display all of the images on the page
images.forEach(function(image) {

    var $divImg = $('<div>');
    $divImg.addClass('image');
    

    var img = $('<img>');
    img.attr('src', image.url);
   

    var $divCover = $('<div>');
    $divCover.addClass('cover');
    var $commentIcon = $('<img>');
    $commentIcon.attr('src', 'comment-icon.png');
    $commentIcon.addClass('icon');
    $divCover.append($commentIcon);

    var $pCover = $('<p>');
    $pCover.addClass("comments-number");
    $pCover.text(commentsNumber(image));
    $divCover.append($pCover);



    $divImg.append(img);

    
    $container.append($divImg);
    $container.append($divCover);


    // display hidden div when you click on the image

    $divImg.on('click', 'img', function(event) {
        $hiddenImage.attr('src', img.src);
        $hidden.css('display', 'flex');
        currentIndex = images.indexOf(image);

        console.log(event);

        checkArrows();

        $describeHere.textContent = image.description;
        createComments(image);
    })
    // img.addEventListener('click', function(event) {
    //     $hiddenImage.setAttribute('src', img.src);
    //     $hidden.style.display = 'flex';
    //     currentIndex = images.indexOf(image);

    //     console.log(event);

    //     checkArrows();

    //     $describeHere.textContent = image.description;
    //     createComments(image);
    // })

    var $covers = $('div.cover');
    
    // $covers = Array.from($covers)
    


    $divImg.on('mouseenter', 'img', function() {
        currentIndex = images.indexOf(image);
        $covers.eq(currentIndex).css('opacity', '0.8');
        $covers.eq(currentIndex).css('transition', "opacity 1s");
    })

    $divImg.on('mouseout', 'img', function() {
        currentIndex = images.indexOf(image);
        $covers.eq(currentIndex).css('opacity', '0');
    })
})

$aTags.on( 'click', 'a', function(e) {
        e.preventDefault();
    })


var $icons = $('img.icon');

// $icons.each( function(i, icon) {
    
//     icon.on('click', function(e) {
//         e.preventDefault();
//     })
//     icon.on('mouseenter', function(e) {
//         e.preventDefault();
//     })

//     icon.on('mouseout', function(e) {
//         e.preventDefault();
//     })
// })


$hidden.on('click', closeImage);
$arrowLeft.on('click', previousImage);
$arrowRight.on('click', nextImage);









