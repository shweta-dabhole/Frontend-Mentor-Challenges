let menu = document.querySelector(".menu")
let box = document.querySelector(".box-mob")
let cross= document.querySelector(".cross")
menu.addEventListener("click",function(){
    box.style.display="block"
    menu.style.display="none"
})
menu.addEventListener("click",function(){
    cross.style.display = "block";
})
cross.addEventListener("click",function(){
    box.style.display="none"
    menu.style.display="block"
    cross.style.display="none"
})