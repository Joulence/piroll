document.querySelector(".item-a").onclick = function (){
  document.querySelector(".item-a").classList.add("flip1");
  document.querySelector(".item-b").classList.add("flip2");
}

document.querySelector(".item-b").onclick = function (){
  document.querySelector(".item-a").classList.remove("flip1");
  document.querySelector(".item-b").classList.remove("flip2");
}