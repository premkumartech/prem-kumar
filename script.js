// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scroll>500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removerClass("show")
//         }
//     });
//     // slid-up script 
//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop:0});
//     });
//     // typing Animation script 
    var typed=new Typed(".typing", {
        strings:["Student", "Web Developer","Student","Programmer", "Freelancer"],
        typeSpeed:130,
        backSpeed:130, 
        loop:true
    });
// });

// -------------about--------------
// var tablinks = document.getElementsByClassName("tab-links")
// var tabcontents = document.getElementsByClassName("tab-contents")

// var event: Event ;
// function opentab(tabname){
//     for(tablink of tablinks){
//         tablink.classList.remove("active-link");
//     }
//     for(tabcontent of tabcontents){
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
// }

// loader

var preloader = document.getElementById('loader');
function myFunction(){
    preloader.style.display = 'none';
}
