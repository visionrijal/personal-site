// getting required elements
var myname = document.querySelector(".name");
var work = document.querySelector(".work");
var hero = document.querySelector("#man");
var div = document.querySelector(".intro-bg");
let btn = document.querySelector("#contact-btn");
let contact= document.querySelector('.contact');

// adding eventlistener to parallax elements
window.addEventListener('scroll', parallax );
div.addEventListener('mousemove', move);
btn.addEventListener('click' ,function showContact(){
   if( contact.style.transform !='translateX(0px)'){
    contact.style.transform='translateX(0px)'
   }
   else{
    contact.style.transform='translateX(200px)'
   }
} )

// function for mouse parallax
function move(event) {
    if (scrollY <= 10) {
        const moveX = -(event.screenX * 0.05);
        const moveY = -(event.screenY * 0.05);
        hero.style.transform = `translate3d(${moveX}px,${moveY}px,0px)`
    }

}
//function for scroll parallax
function parallax(event) {
    var topDistance = scrollY;
    var depth, movement
    var layers = document.querySelectorAll("[data-type=parallax]")
    myname.style.transform= translate3d = 'translate3d(' +scrollY*100 +'px ,'+scrollY+'px,0)'
    work.style.transform=translate3d = 'translate3d(' + -scrollY*100 +'px ,'+scrollY+'px,0)'

    for (var i = 0; i < layers.length; i++) {
        depth = layers[i].getAttribute("data-depth")
        movement = -(topDistance * depth);
        translate3d = 'translate3d(0,' + movement + 'px,0)'
        layers[i].style.transform = translate3d

    }
}
let mobileContact= document.querySelector(".mobile-contact")
let mobileBurger = document.querySelector('.mobile-burger')
mobileBurger.addEventListener('click', function showNav(){
    if( mobileContact.style.transform !='translateX(0px)'){
     mobileContact.style.transform='translateX(0px)'
    }
    else{
     mobileContact.style.transform='translateX(200px)'
    }
 })

