let menuToggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".nav-menu");
let dropper = document.querySelectorAll(".dropper");
let dropped = document.querySelectorAll(".dropped");

menuToggle.addEventListener('click', ()=>{

    menu.classList.toggle("hide");
})

dropper.forEach((btn)=>{
    btn.addEventListener('click', ()=>{

        btn.classList.toggle('done');
        btn.nextElementSibling.classList.toggle('show');


        dropper.forEach((btn2)=>{
            if(btn2 != btn){

                btn2.classList.remove('done');
                btn2.nextElementSibling.classList.remove('show');
            }
        })
    })
})


