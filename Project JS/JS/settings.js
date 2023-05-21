let all_formelem=document.querySelectorAll("input");
let user_info={};
let loginemail;
addEventListener("load",()=>{
        if(document.cookie.indexOf("email")!==0)
        {
          window.stop();
          window.open("../Pages/Index.html","_self")
        }
    let cookindex=document.cookie.indexOf("email");
if(cookindex===0)
{
loginemail= getCookie("email");
}
let allitems=JSON.parse(window.localStorage.getItem(loginemail));
all_formelem.forEach(item=>{
    if(item.id!=="save_btn"&&item.id!=="cancel_btn")
    item.value=allitems[item.id];
})

if(allitems["female"]!=="undefined")
{
    all_formelem[7].checked=true;

}
else if(allitems["male"]!=="undefined")
{
    all_formelem[6].checked=true;
}
})
function getCookie(cookiename) {
    let name = cookiename + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  let Save_button=document.getElementById("save_btn");
  Save_button.addEventListener("click",()=>
  {
    all_formelem.forEach(item=>{
        user_info[item.id]=item.value});
        
        if(all_formelem[7].checked)
        { 
          delete user_info["male"];  
        }
        else if(all_formelem[6].checked)
        {
             delete user_info["female"]
        }
    
    delete user_info["save_btn"];
    delete user_info["cancel_btn"];
    window.localStorage.setItem(loginemail,JSON.stringify(user_info));
    return false;
  })

 let cancel_button=document.getElementById("cancel_btn")
 cancel_button.addEventListener("click",()=>
 {
    let allitems=JSON.parse(window.localStorage.getItem(loginemail));
    all_formelem.forEach(item=>{
        if(item.id!=="save_btn"&&item.id!=="cancel_btn")
        item.value=allitems[item.id];
    })
    
    if(allitems["female"]!=="undefined")
    {
        all_formelem[7].checked=true;
    
    }
    else if(allitems["male"]!=="undefined")
    {
        all_formelem[6].checked=true;
    }
    return false; 
 })