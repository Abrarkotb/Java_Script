
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

if( localStorage.setItem('password') ===  document.getElementById('pass_old').value)  
  function changePassBtnClick(){
    localStorage.setItem('password', document.getElementById('pass_new').value);
    alert('Password changed');
  }

  function loginBtnClick(){
    if(document.getElementById('setnew_pass').value == localStorage.getItem('password')){
      alert('Correct Login');
    }else{
      alert('Wrong Password');
    }
  }





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