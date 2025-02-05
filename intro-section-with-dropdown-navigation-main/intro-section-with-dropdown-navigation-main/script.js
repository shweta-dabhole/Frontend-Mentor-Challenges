let list1 = document.querySelector(".nav-1");
let list2 = document.querySelector(".nav-2");
let dropdown = document.querySelector(".dropdown-1");
let dropdown2 = document.querySelector(".dropdown-2");
let mob1 = document.querySelector(".mob-1")
mob1.addEventListener("mouseover", function(){
  mob1.src="./images/icon-arrow-up.svg"
  console.log("click?");
  
})
list1.addEventListener('mouseover',function(){
    console.log("clicked");
    dropdown.style.display ="block"
    list1.src ="./images/icon-arrow-up.svg"
})
list1.addEventListener("mouseout", function () {
  console.log("clicked");
  dropdown.style.display = "none";
  list1.src = "./images/icon-arrow-down.svg";
});
list2.addEventListener("mouseover", function () {
  console.log("clicked");
  dropdown2.style.display = "block";
  list2.src = "./images/icon-arrow-up.svg";
});
list2.addEventListener("mouseout", function () {
  console.log("clicked");
  dropdown2.style.display = "none";
    list2.src = "./images/icon-arrow-down.svg";
});