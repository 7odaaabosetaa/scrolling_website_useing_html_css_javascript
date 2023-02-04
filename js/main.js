let star = document.getElementById('star');
let moon= document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let logo = document.querySelector('section .logo');
window.onscroll=()=>{
    let value = scrollY;
    star.style.left= `${value}px`;
    moon.style.top=`${value * 4}px`;
    mountains3.style.top=`${value * 2}px`;
    mountains4.style.top=`${value * 2}px`;
    river.style.top=`${value}px`;
    boat.style.top=`${value}px`;
    boat.style.left=`${value *4}px`;
    logo.style.fontSize= `${value}px`;
    if(scrollY >= 88){
        logo.style.fontSize= 88+"px";
    }
    if(scrollY>= 100){
        document.querySelector("section").style.background="linear-gradient(#4fadd9,#0e0033)";
        
    }else{
        document.querySelector("section").style.background="linear-gradient(#2d001c,#0e0033)";
        
    }
}
