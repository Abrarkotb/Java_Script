onload=()=>{
  let val=document.cookie.indexOf("email");
  if(val!==0)
  {
    window.open("../Pages/Index.html","_self");
  }
}
let logout_btnn=document.getElementById("logout_user");
if(logout_btnn)
{logout_btnn.addEventListener("click",(e)=>{
    window.open("../Pages/Index.html","_self");
    document.cookie="email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
},false)
}
// function myFunction() {
//     var x = document.getElementById("pass_old");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   }
//   function myFunction_2() {
//     var x = document.getElementById("pass_new");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   }


  // ==============================================================================================================

 /* function Function() {
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
  }
}*/