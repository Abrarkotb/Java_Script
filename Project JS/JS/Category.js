// onload=()=>{
//   let val=document.cookie.indexOf("email");
//   if(val!==0)
//   {
//     window.open("../Pages/Index.html","_self");
//   }
//   let navbar=document.getElementById("nav_items");
//   let login_bt=document.getElementById("log_btnn");
//   let reg_btnn=document.getElementById("register_btn");
//   let logout_btnn=document.getElementById("Logout_btn");
//   navbar.style.visibility="visible";
//   login_bt.style.visibility="hidden";
//   reg_btnn.style.visibility="hidden";
// logout_btnn.style.visibility="visible";
// }


let content = document.querySelector("#catt_api");

let out = "";
fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then((response) => response.json())
.then((Cats) => {
   return  Cats.map(Cat => {
          
      out += `
      <div class="col-md-4 mb-4 ">
              <img class="card_img"height="400" src="${Cat.url}">
              <div class="card-body">
                <p class="card-text"></p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <button type="button"  id="apis" class="btn btn-sm btn-outline-secondary" onclick="click_item"> View More</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Add To Card</button>
                  </div>
                  <small class="text-muted"> 40 $</small>
                </div>
              </div>
          </div>
          `;
          content.innerHTML = out;
        })
    });
    

function click_item(){
  
    // let view_more= document.getElementById("apis");

    //       view_more.addEventListener("click",()=>{
    //         alert("hhh")
        
           window.open("../Pages/item Details.html","_self");
          
         }
    

