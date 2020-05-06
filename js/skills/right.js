document.querySelector(".item-c").onclick = function (){
  document.querySelector(".item-c").classList.add("flip1");
  document.querySelector(".item-d").classList.add("flip2");
}

document.querySelector(".item-d").onclick = function (){
  document.querySelector(".item-c").classList.remove("flip1");
  document.querySelector(".item-d").classList.remove("flip2");
}