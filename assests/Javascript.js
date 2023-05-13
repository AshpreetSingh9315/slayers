
// navbar

var navbar = document.querySelector('.navbar');
var nav = document.querySelector('.navbar_span_1')
var links = document.querySelector('.links')
    

window.addEventListener('scroll',()=>{
    if(pageYOffset>=500){
        navbar.style.background="black";
        nav.style.color="white";
        navbar.style.transition='0.6s all';
        navbar.style.transitionProperty='color';
        links.style.color='red'
    }
    else{
        navbar.style.background="rgba(0, 0, 0, 0.308)"
        nav.style.color="black";
        navbar.style.transition='0.6s all';
        navbar.style.transitionProperty='color';
    }

})





// top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})