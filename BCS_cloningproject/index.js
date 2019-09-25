function showMenu() {
    document.getElementById("dropdownmenu").classList.toggle("show");
}

function showMenuAbout() {
    document.getElementById("dropdownmenuabout").classList.toggle("show");
  }

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdownscon = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdownscon.length; i++) {
      var openDropdownCon = dropdownscon[i];
      if (openDropdownCon.classList.contains('show')) {
        openDropdownCon.classList.remove('show');
      }
    }
    var dropdowns = document.getElementsByClassName("dropdown-content-about");
    var j;
    for (j = 0; j < dropdowns.length; j++) {
      var openDropdown = dropdowns[j];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}