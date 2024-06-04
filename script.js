// {/* <script>
// function toggleNav() {
//     document.querySelector('.nav-toggle-btn').classList.toggle('active');
// }
// </script> */}
// JavaScript function to toggle the 'active' class on the button
function toggleNav() {
    document.querySelector('.nav-toggle-btn').classList.toggle('active');
}

// navbar toggle in mobile
'use strict';

const $navbar =document.querySelector("[data-navbar]");

const  $navToggler =document.querySelector("[data-nav-toggler)")

$navToggler.addEventListener("click", ()=> $navbar.classList.toggle("active"));



//header scroll state

const $header= document.querySelector("[data-header]");
window.addEventListener("scroll", e=>{
    $header.classList[window.scrollY > 50? "add": "remove"]("active");
})




