
function myFunction() {
    var x = document.getElementById("pass_old");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function myFunction_2() {
    var x = document.getElementById("pass_new");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


// // ========================================================================================================================================================

  function Function() {
    var key_email =   getElementById.localStorage.getItem(email);
    var oldpasswprd = document.getElementById('pass_old');
    var newpassword = document.getElementById('pass_new');
    var confirmpassword = document.getElementById('re_writepass');
   
if(window.localStorage.getItem[key_email.value] === oldpasswprd.value){
      if (oldPassword.value == "" || newpassword.value == "" || confirmpassword.value == "") {
        alert('Please fill all the details');
    }
    else if (oldpasswprd === newpassword) {
        alert("Old password and New Password cannot be same");
    }
    else if(newpassword != confirmpassword){
        alert("password mismatch");
    }}


 window.localStorage.setItem(key_email[9].value , JSON.stringify(newpassword));
  }