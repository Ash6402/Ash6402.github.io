let menuBtn = document.querySelector('.menuBtn');
let navList = document.querySelector('.navList');
let logo = document.querySelector('#header-logo');
let menuBtnImg = document.querySelector('#menuBtn-image');

menuBtn.addEventListener('click', ()=>{

    navList.classList.toggle('showList')
    
    if(navList.classList.contains('showList')){
        menuBtnImg.setAttribute('src', './images/icon-close.svg');
    }else{
        menuBtnImg.setAttribute('src', './images/icon-hamburger.svg');
    }

    menuBtn.classList.toggle('fixed');
    logo.classList.toggle('fixed');
})