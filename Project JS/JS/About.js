onload=()=>{
    if(document.cookie.indexOf("email")!==0)
    {
      window.stop();
      window.open("../Pages/Home.html","_self")
    }
  }