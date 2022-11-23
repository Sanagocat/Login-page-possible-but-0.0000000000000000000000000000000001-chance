
var user_id = document.getElementById('user_id');
var password = document.getElementById('password_for_login')
var login_button = document.getElementById('login_button');
login_button.addEventListener('click', login_function);

function login_function() {
  //alert("welcome, " + user_id.value + "::"+ password.value);
  var my_id = "danwoo";
  var my_password = "13531353";

  if(my_id==user_id.value && my_password==password.value)
  {
    alert ("CORRECT PASSWORD!! WELCOME!!!")
    location.replace("main.html"); //
  }
  else
  {
    alert ("INVALID USER....FAIL....")
  }
}





