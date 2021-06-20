 //xử lý toggle responsive
function toggle(){
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  // navbarLinks.classList.toggle("active");//c1
  // Remove a class: element.classList.toggle("classToRemove", false);
  // Add a class: element.classList.toggle("classToAdd", true);
  navbarLinks?.classList.add("active");
  // const chevronRight =
  //   document.getElementsByClassName("hide-toggleButton")[0];
  // chevronRight?.style.visibility = "visible";
}

//nhấn mũi tên để back lại toggle button

function hideToggle(){
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  // navbarLinks.classList.toggle("active"); c1
  navbarLinks.classList.remove("active");
  const chevronRight =
    document.getElementsByClassName("hide-toggleButton")[0];
  chevronRight.style.visibility = "collapse";
}
