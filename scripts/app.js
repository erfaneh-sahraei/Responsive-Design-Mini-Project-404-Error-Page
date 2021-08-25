let menu = document.querySelector(".menu");
let icon = document.querySelector(".nav_icon");

icon.addEventListener("click",function() {
  if (this.classList.contains("fa-bars")){
    this.classList = "fas fa-times nav_icon";
    menu.style.left = 0;
  } else {
    this.classList = "fas fa-bars nav_icon";
    menu.style.left = "-220px";
  }

})
 




