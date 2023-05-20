onload=()=>{
  if(document.cookie.indexOf("email")===0)
  {
    window.open("../Pages/Home.html","_self");
  }
}
const formm = document.querySelector("form");
let all_items=document.querySelectorAll("input");
let Submit_btn=document.getElementById("submit_btn");
let user={};
formm.addEventListener("submit",(e)=>
{
  save_user();
  e.preventDefault();
})
 function save_user()
{
    let saved_email=JSON.parse(window.localStorage.getItem(all_items[8].value));
    if(saved_email===null&&all_items[8].value!=="")
    {
          all_items.forEach(item=>{
                user[item.id]=item.value});
       if(all_items[7].checked)
    { 
      delete user["male"];  
    }
    else if(all_items[6].checked)
    {
         delete user["female"]
    }
delete user["submit_btn"];
delete user["reset_btn"];

  window.localStorage.setItem(all_items[8].value, JSON.stringify(user));
  window.location.href="../Pages/Home.html";
}
else if(all_items[8].value==="")
{
    return;
}
else{
alert("you already registered");
return;
}
}