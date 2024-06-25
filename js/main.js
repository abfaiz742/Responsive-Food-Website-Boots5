// Header Scroll 
let navBar = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        navBar.classList.add("header-scrolled"); 
    }else{
        navBar.classList.remove("header-scrolled");
    }
}

// nav hide  
let navBarLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBarLink.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
