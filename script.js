//window.addElementListener("load",function(){
//  setTimeout(function(){
//    document.getElementById("loading").classList.remove("active");
//  },500)
//})

setTimeout(function(){
  document.getElementById("loading").classList.remove("active");
},3500)

setTimeout(function(){
  document.getElementById("after").classList.add("active");
},3499)


const targetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ",window.innerHeight)
document.addEventListener("scroll",function(){
  for  (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight*.6
    if(window.innerHeight > getElementDistance){
        targetElement[i].classList.add("show");
    }
  }
});
