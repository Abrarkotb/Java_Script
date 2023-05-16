let Submit_btn=document.getElementById("submit_btn");
let all_items=document.querySelectorAll("input");
let user={}
let users=[]
let i=0;
Submit_btn.addEventListener("click",()=>
{
   save_user()
})
function save_user()
{
all_items.forEach(item=>{
    user[item.id]=item.value});
delete user["submit_btn"];
delete user["reset_btn"];
window.localStorage.setItem(all_items[8].value,JSON.stringify(user));
}