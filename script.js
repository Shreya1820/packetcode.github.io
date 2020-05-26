console.log('Hello');

var login;

login = document.querySelector('#login');



login.addEventListener('submit',function(event) {
   
   event.preventDefault();
    var fname;
    fname = login.querySelector('#fname').value;
    lname = login.querySelector('#lanme').value;
    console.log(fname);
    console.log(lname);

});
