import getNav from './module.js'

functionality();

async function functionality(){

    await getNav('nav.html');

    const btn = document.querySelector('#menu-btn');
    const sideNav = document.querySelector('.links-list');
    const links = document.querySelectorAll('.link');

    btn.addEventListener('click', ()=>{
        sideNav.classList.toggle('show');
        btn.classList.toggle('rotate');
        btn.classList.toggle('fixed');
        if(sideNav.classList.contains('show')){
        btn.setAttribute('src', './assets/shared/icon-close.svg');
        }else{
        btn.setAttribute('src', './assets/shared/icon-hamburger.svg');
        }
    })

    links.forEach(link=>{
        link.addEventListener('click', ()=>{
            sideNav.classList.remove('show');
        })

        let bodyClass = document.body.className;

        let page = new RegExp(bodyClass, 'i');

        if(page.test(link.innerText)){
            link.classList.add('active');
        }
    })

}