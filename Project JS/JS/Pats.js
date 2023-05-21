let reg_btn=document.getElementById("register_btn");
let user_prof=document.getElementById("user_profile");
let nav_barlist=document.getElementById("nav_items");
onload=()=>{
    if(document.cookie.indexOf("email")===0)
    {
    login_btn.style.visibility="hidden";
    reg_btn.style.visibility="hidden";
    nav_barlist.style.visibility="visible";
    logout_btn.style.visibility="visible";
    user_prof.style.visibility="visible";
}
    else{
        nav_barlist.style.visibility="hidden"
        login_btn.style.visibility="visible";
        reg_btn.style.visibility="visible";
        logout_btn.style.visibility="hidden";
    user_prof.style.display="none";
    }
}

reg_btn.addEventListener("click",()=>
{
    window.open("../Pages/Form_register.html","_self");
})
let login_btn=document.getElementById("log_btnn");
login_btn.addEventListener("click",(e)=>{
    window.open("../Pages/LOGIN.html","_self");
    
})
let logout_btn=document.getElementById("Logout_btn");
logout_btn.addEventListener("click",(e)=>{
    window.open("../Pages/Index.html","_self");
    document.cookie="email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
})
let About_btn=document.getElementById("about_btn");
if(About_btn)
    {
About_btn.addEventListener("click",()=>{
    window.open("../Pages/About.html","_self");
},false)
    }
let Home_btn=document.getElementById("home_btn");
if(Home_btn)
    {
Home_btn.addEventListener("click",()=>{
    
    window.open("../Pages/Index.html","_self");
},false)
}

let Category_btn=document.getElementById("category_btn");
if(Category_btn)
    {
Category_btn.addEventListener("click",()=>{
    
    window.open("../Pages/Categores .html","_self");
},false)
}