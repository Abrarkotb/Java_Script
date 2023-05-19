let reg_btn=document.getElementById("register_btn");
reg_btn.addEventListener("click",(e)=>{
    window.open("../Pages/Form_register.html","_self");
})

let login_btn=document.getElementById("log_btnn");
login_btn.addEventListener("click",(e)=>{
    window.open("../Pages/LOGIN.html","_self");
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
    
    window.open("../Pages/Home.html","_self");
},false)
}