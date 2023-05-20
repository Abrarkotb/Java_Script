onload=()=>{
  if(document.cookie.indexOf("email")===0)
  {
    window.stop();
    window.open("../Pages/Home.html","_self")
  }
}
let login_email= document.getElementById("log_email");
let pass_btn= document.getElementById("pass_log");
let loginbotton =document.getElementById("log_butt");
loginbotton.addEventListener("click",()=>
{
   check_user()
})

function check_user(){
    let storedemail = window.localStorage.getItem(login_email.value);
    let storedpass ;
    storedpass = storedemail["password"];
if(storedemail !==  null){

     if(storedpass === pass_btn){
       storedpass = storedemail["password"];
        setcookie()
        alert('login succesfuly');
        window.open("../Pages/Home.html","_self");

      }else if(storedpass !== pass_btn.value){
          alert('invaild password,tyr again')
      }
}else if(storedemail == null){
    alert('please Enter valid Email');
   }
}
function setcookie()
{
    const d = new Date();
    d.setTime(d.getTime() + (10*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "email" + "=" + login_email.value + ";" + expires + ";path=/";
  
}
