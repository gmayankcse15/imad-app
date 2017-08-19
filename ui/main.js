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
 // submit username and password to login 
var button = document.getElementById('submit_btn') ;
button.onclick = function() {
      
    // create a request object
    var request = new XMLHttpRequest() ;
   
    // Capture the response and store it in a variable
    request.onreadystatechange = function() {

    if(request.readyState === XMLHttpRequest.DONE) {
        if(request.status === 200)
          {
              
           // var counter = request.responseText;
        //    var span = document.getElementById('count');
         //    console.log(counter.toString()) ;
          //  span.innerHTML = counter.toString() ;
            /*  var names = request.responseText ;
              names = JSON.parse(names) ;
  var list = '' ;
  for(var i = 0 ; i < names.length; i++) {
      list += '<li>' + names[i] + '</li>' ;
      
  }
  var ul = document.getElementById('namelist') ;
  ul.innerHTML= list ;
*/
      console.log('user is logged in') ;
      alert('logged in successsfully');
          }
          else if(request.status == 403) {
           alert('Username/password is incorrect');
              
          }else if(request.status == 500){
              alert("Something went wrong on the server") ;
          }
    }
  
    
        
    };
    var username = document.getElementById('username').value;
     var password = document.getElementById('password').value ;
     console.log(username);
     console.log(password);
    
    // Make the request
    //request.open('POST', 'http://gmayank386cse15.imad.hasura-app.io/submit-name?name='+ name, true) ;
    
    request.open('POST', 'http://gmayank386cse15.imad.hasura-app.io/login', true) ;
    request.setRequestHeader('Content-Type','application/json') ;
    request.send(JSON.stringify({username: username, password: password})) ;

    
};



// Submit name
/*
var nameInput = document.getElementById('name');
var name = nameInput.value ;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
  var names = ['name1', 'name2', 'name3'] ;
  var list = '' ;
  for(var i = 0 ; i < names.length; i++) {
      list += '<li>' + names[i] + '</li>' ;
      
  }
  var ul = document.getElementById('namelist') ;
  ul.innerHTML= list ;
  
};
*/