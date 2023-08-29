const menuBtn = document.querySelector(".menu-btn") as HTMLButtonElement;
const nav = document.querySelector(".nav-links") as HTMLElement;
const navDiv = document.querySelector(".nav") as HTMLDivElement;
const shadow: string = "rgba(0, 0, 0, 0.3) 0px 0px 0px 1000vmax"; //0 0 0 1000vmax rgba(0,0,0,0.3)
const noShadow: string = " rgba(0, 0, 0, 0) 0px 0px 0px 1000vmax";
const num = 20;

menuBtn.addEventListener('click', ()=>{

    if(!nav.classList.contains('rollDown')){
        nav.classList.toggle('rollDown');
        nav.classList.remove('rollUp');
        navDiv.style.boxShadow = shadow;
        menuBtn.firstElementChild?.setAttribute('src', './images/icon-close.svg');

    }else{
        nav.classList.add('rollUp');
        nav.classList.remove('rollDown');
        nav.addEventListener('animationend', ()=>{
            nav.classList.remove('rollUp');
        })
        navDiv.style.boxShadow = noShadow;
        menuBtn.firstElementChild?.setAttribute('src', './images/icon-hamburger.svg');
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= 768 && navDiv.style.boxShadow == shadow){
        navDiv.style.boxShadow = noShadow;
    }else if(window.innerWidth < 768 && nav.classList.contains('rollDown')){
        navDiv.style.boxShadow = shadow;
    }
    
    
})