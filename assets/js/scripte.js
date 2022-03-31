// add menu event :
var button = document.getElementById("menu");
var menu = document.getElementById("hide");
button.addEventListener("click",function(){ 
    menu.classList.toggle("visually-hidden");
});
