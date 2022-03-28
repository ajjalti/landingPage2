// add menu event :
var button = document.getElementById("menu");
var menu = document.getElementById("hide");
button.addEventListener("click",function(){ 
    menu.setAttribute("id","");
});
button.addEventListener("dblclick",function(){
    menu.setAttribute("id","hide");
});