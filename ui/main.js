//console.log('Loaded!');

//var element = document.getElementById('main-text');

//element.innerHTML = 'New value' ;


// Move the image
/*
var img = document.getElementById('madi');
var marginLeft = 0 ;

 
img.onclick = function() {
 setInterval(function()
 {    console.log('Implemented') ;
     marginLeft = marginLeft + 1 ;
    img.style.marginLeft = marginLeft + 'px' ;
 }, 10);
};
*/

/*

var button = document.getElementById('counter') ;
var counter = 0 ;
button.onclick = function() {
    
    counter = counter + 1 ;
    var span = document.getElementById('count') ;
    span.innerHTML = counter.toString();
}
*/
 
var button = document.getElementById('counter') ;
button.onclick = function() {
 //   console.log("Hello") ;
    // create a request object
    var request = new XMLHttpRequest() ;
    
    // Capture the response and store it in a variable
    request.onreadstatechange = function() {
        
        
    if(request.readyState === XMLHttpRequest.DONE) {
        if(request.status === 200)
          {
              
            var counter = request.responseText;
            var span = document.getElementById('count');
           
            span.innerHTML = counter.toString() ;
            
        }
    }    
    
        
    };
    
    // Make the request
    request.open('GET', 'http://gmayank386cse15.imad.hasura-app.io/counter',true) ;
    request.send(null) ;

    
};
