var hamburger = document.querySelector('.hamburger');
var upper = hamburger.children[0];
var middle = hamburger.children[1];
var bottom = hamburger.children[2];
var navbar = document.querySelector('.nav-container');

hamburger.addEventListener('click',() =>{
    if(hamburger.getAttribute('aria-clicked')==="false"){
        hamburger.setAttribute('aria-clicked',"true");
        upper.classList.add('upper');
        middle.classList.add('middle');
        bottom.classList.add('bottom');
        // navbar.classList.remove('disp');
        $('#navbar').slideToggle('slow');
    }
    else{
        hamburger.setAttribute('aria-clicked',"false");
        upper.classList.remove('upper');
        middle.classList.remove('middle');
        bottom.classList.remove('bottom');
        navbar.classList.add('disp');
    }
    
});