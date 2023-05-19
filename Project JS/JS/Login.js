let login_email=document.getElementById("log_email");
let pass_btn=document.getElementById("pass_log");
let loginbotton =document.getElementById("log_butt");
loginbotton.addEventListener("click",()=>
{
   check_user()
})

function check_user(){
    let storedemail = window.localStorage.getItem(login_email.value);
    let storedpass ;
if(storedemail !==  null){
 storedpass = storedemail["password"];
     if(storedpass === pass_btn.value){
        window.sessionStorage.setItem(login_email.value,"true"); 
        alert('login succesfuly');
         window.open("../Pages/Home.html","_self")
      }else if(storedpass !== pass_btn.value){
          alert('invaild password,tyr again')
      }
}else if(storedemail == null){
    alert('please Enter valid Email');
   }
}

