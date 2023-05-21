onload=()=>{
  let val=document.cookie.indexOf("email");
  if(val!==0)
  {
    window.open("../Pages/Index.html","_self");
  }
  let navbar=document.getElementById("nav_items");
  let login_bt=document.getElementById("log_btnn");
  let reg_btnn=document.getElementById("register_btn");
  let logout_btnn=document.getElementById("Logout_btn");
  navbar.style.visibility="visible";
  login_bt.style.visibility="hidden";
  reg_btnn.style.visibility="hidden";
logout_btnn.style.visibility="visible";
}