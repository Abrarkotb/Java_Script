function w3_open() {
    var x = document.getElementById("myAccordion");
    if (x.style.display === 'none') {
      x.style.display = 'block';
      if (document.getElementById("navbtn_menu")) {
        document.getElementById("navbtn_menu").getElementsByTagName("i")[0].style.display = "none";
        document.getElementById("navbtn_menu").getElementsByTagName("i")[1].style.display = "inline";
      }
    } else {
      x.style.display = 'none';
      if (document.getElementById("navbtn_menu")) {
        document.getElementById("navbtn_menu").getElementsByTagName("i")[0].style.display = "inline";
        document.getElementById("navbtn_menu").getElementsByTagName("i")[1].style.display = "none";
      }
    }
  }

  function w3_close() {
    document.getElementById("myAccordion").style.display = "none";
  }
  function open_xs_menu(x) {
    if (document.getElementById("sectionxs_" + x).innerHTML == "") {
      document.getElementById("sectionxs_" + x).innerHTML = document.getElementById("nav_" + x).innerHTML;
    } else {
      document.getElementById("sectionxs_" + x).innerHTML = "";
    }
  }