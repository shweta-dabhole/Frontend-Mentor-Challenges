let list1 = document.querySelector(".nav-1");
let list2 = document.querySelector(".nav-2");
let dropdown = document.querySelector(".dropdown-1");
let dropdown2 = document.querySelector(".dropdown-2");
let mob1 = document.querySelector(".mob-1")
let mobdrop = document.querySelector(".mob-div")
let mob2 = document.querySelector(".mob-2");
let mobdrop2 = document.querySelector(".mob-div-2");
let menu = document.querySelector(".menu")
let box = document.querySelector(".box")
let close1 = document.querySelector(".close")



list1.addEventListener('mouseover',function(){
    dropdown.style.display ="block"
    list1.src ="./images/icon-arrow-up.svg"
})
list1.addEventListener("mouseout", function () {
  dropdown.style.display = "none";
  list1.src = "./images/icon-arrow-down.svg";
});
list2.addEventListener("mouseover", function () {
  dropdown2.style.display = "block";
  list2.src = "./images/icon-arrow-up.svg";
});
list2.addEventListener("mouseout", function () {
  dropdown2.style.display = "none";
    list2.src = "./images/icon-arrow-down.svg";
});

// ---------- For Mobile ------------
menu.addEventListener("click", function () {
  box.style.display = "block";
  document.body.style.backgroundColor = "gray";
});
 close1.addEventListener("click",function(){
  box.style.display = "none"
  document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
})
mob1.addEventListener("click", function(){
  mob1.src="./images/icon-arrow-up.svg"
  mobdrop.style.display ="block"
  
})
mob2.addEventListener("click", function () {
  mob2.src = "./images/icon-arrow-up.svg";
  mobdrop2.style.display = "block";
});

