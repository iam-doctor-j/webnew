var hamburger = document.querySelector('.hamburger');
var upper = hamburger.children[0];
var middle = hamburger.children[1];
var bottom = hamburger.children[2];
var navbar = document.querySelector('.nav-container');
var progressBar = document.querySelector('.prog');
var loader = document.querySelector('.loader');
var rotator = document.querySelector('.rotator');
var get = document.querySelector('.get');
var set = document.querySelector('.set');
var go = document.querySelector('.go');
var bomb = document.querySelector('.bomb');

hamburger.addEventListener('click',() =>{
    if(hamburger.getAttribute('aria-clicked')==="false"){
        hamburger.setAttribute('aria-clicked',"true");
        upper.classList.add('upper');
        middle.classList.add('middle');
        bottom.classList.add('bottom');
        navbar.classList.remove('disp');
    }
    else{
        hamburger.setAttribute('aria-clicked',"false");
        upper.classList.remove('upper');
        middle.classList.remove('middle');
        bottom.classList.remove('bottom');
        navbar.classList.add('disp');
    }
    
});

$(document).ready(()=>{
    progressBar.classList.replace('prog-i','prog-x');
    setTimeout(()=>{
        loader.classList.add('d-none');
        get.classList.remove('d-none');
        setTimeout(()=>{
            get.classList.add('d-none');
            set.classList.remove('d-none');
            setTimeout(()=>{
                set.classList.add('d-none');
                go.classList.remove('d-none');
                setTimeout(()=>{
                    go.classList.add('d-none');
                    bomb.classList.remove('d-none');
                },1000);
            },1000);
        },1000);
    },3100)  
})

bomb.addEventListener('click',()=>{
    let bombimg = document.querySelector('.bomb-img');
    let crater = document.querySelector('.crater');
    bombimg.setAttribute('src','css/assets/fire-explosion-animation-3-s.gif');
    bombimg.classList.add('img-blend');
    setTimeout(()=>{
        bombimg.classList.add('d-none');
        
    },1100);
    setTimeout(()=>{
        crater.setAttribute('src','css/assets/crater.png');
    },700);
})