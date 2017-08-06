console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value' ;


// Move the image

var img = document.getElementById('madi');
var marginLeft = 0 ;

 
img.onclick = function() {
 setInterval(function()
 {    console.log('Implemented') ;
     marginLeft = marginLeft + 10 ;
    img.style.marginLet = marginLeft + 'px' ;
 }, 3000);
};


