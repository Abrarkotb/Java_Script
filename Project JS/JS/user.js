
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


  // ==============================================================================================================

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



// ====================================================================================================================
  // var Submit_bttn =document.getElementById("subnew_pass");
  // var oldP=document.getElementById("pass_old").value;
  // var newP=document.getElementById("pass_new").value;
  // var confirmP =document.getElementById("re_writepass").value; 
  // function checkForm()
  // {
  //   if(localStorage.getItem['password'] === oldpasswprd){
  //         if (oldPassword == "" || newpassword == "" || confirmpassword == "") {
  //             alert('Please fill all the details');
  //         }
  //         else if (oldpasswprd == newpassword) {
  //             alert("Old password and New Password cannot be same");
  //         }
  //         else if (newpassword != confirmpassword) {
  //             alert("password mismatch");
  //         }
  //     }}




//    if(oldP!=""&&newP!=""&&confirmP!="")
//    {
//      if(oldP!=newP)
//      {
//        if(newP==confirmP)
//         {
//          return true;
//         }
//         else
//          {
//            alert("Confirm password is not same as you new password.");
//            return false;
//          }
//      }
//      else
//     {
//      alert(" This Is Your Old Password,Please Provide A New Password");
//      return false;
//     }
//    }
//    else
//    {
//     alert("All Fields Are Required");
//     return false;
//    }
// }
// ===============================================================================================
//   let Submit_bttn =document.getElementById("subnew_pass");
//   let oldpasssword = document.getElementById('pass_old');
//   let newpassword  = document.getElementById('pass_new');
//   let rewritepass  = document.getElementById('re_writepass');
//   let storedpassword = window.localStorage.getItem(password.value);

// Submit_bttn.addEventListener("click",(e)=>
// {

//    change_password();
// return false; 
// })
// if(!localStorage.getItem('password')){
//     localStorage.setItem('password', newpassword.value);
//   }

// function change_password(){
// if (storedpassword === oldpasssword && newpassword === rewritepass ){
//     storedpass = storedemail["password"];
//     localStorage.setItem('password', newpassword.value);

// }};


// ==========================================================================================




















































// if( localStorage.setItem('password') ===  document.getElementById('pass_old').value)  
//   function changePassBtnClick(){
//     localStorage.setItem('password', document.getElementById('pass_new').value);
//     alert('Password changed');
//   }

//   function loginBtnClick(){
//     if(document.getElementById('setnew_pass').value == localStorage.getItem('password')){
//       alert('Correct Login');
//     }else{
//       alert('Wrong Password');
//     }
//   }


//   if(!localStorage.getItem('password')){
//     localStorage.setItem('password', 'pass');
//   }


//   function loginBtnClick(){
//     if(document.getElementById('login').value == localStorage.getItem('password')){
//       alert('Correct Login');
//     }else{
//       alert('Wrong Password');
//     }
//   }