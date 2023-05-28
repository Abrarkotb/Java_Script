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



let content2 = document.querySelector("#apis");

let out = "";



fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then((response) => response.json())
.then((items) => {
   return  items.map(Cat => {
          
      out += `
      
<div class="card_item">
<img src="${Cat.url}" alt="Avatar" class="img_item">
<div class="container_item">
  <h4><b>Food FOR Cats</b></h4> 
  <p>54-Piece Jungle Animals Toys Set,Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit est maiores facere! Aliquid, voluptate! Itaque, dolore labore et adipisci odit accusamus quos alias ipsam dicta expedita deleniti, sit asperiores! ValeforToy Realistic Wild Vinyl Plastic Animal Learning Party Favors Toys For Boys Girls Kids Toddlers Forest Small Animals Playset</p> 
</div>
</div>
          `;
          content2.innerHTML = out;
        })
    });
    


