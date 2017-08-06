console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value' ;


// Move the image

var img = document.getElementById('madi');
var marginLeft = 0 ;

 
img.onclick = function() {
 setInterval(function()
 {    console.log('Implemented') ;
     marginLeft = marginLeft + 1 ;
    img.style.marginLeft = marginLeft + 'px' ;
 }, 10);
};


var button = document.getElementById('counter') ;
button.onclick = function() {
    
    
    
    
    
    counter = counter +1 ;
    var span = document.getElementById('count') ;
    span.innerHTML = counter.toString() ;
}