console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value' ;


// Move the image

var img = document.getElementById('madi');
var marginLeft = 0 ;
function moveRight() {
    marginLeft = marginLeft + 10 ;
    img.style.marginLet = marginLeft + 'px' ;
} 
img.onclick = function() {
  var interval = setInterval(moveRight,50) ;
  console.log('Implemented') ;
};


