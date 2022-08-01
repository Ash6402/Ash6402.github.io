let menuToggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".nav-menu");
let dropper = document.querySelectorAll(".dropper");
let dropped = document.querySelectorAll(".dropped");

menuToggle.addEventListener('click', ()=>{

    menu.classList.toggle("hide");
})

dropper.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        // btn.style.setProperty("--rotate", "rotate(180deg)");
        // btn.nextElementSibling.style.display = 'block';

        btn.classList.toggle('done');
        btn.nextElementSibling.classList.toggle('show');


        dropper.forEach((btn2)=>{
            if(btn2 != btn){
                // btn2.style.setProperty("--rotate", "rotate(0deg)");
                // btn2.nextElementSibling.style.display = 'none';

                btn2.classList.remove('done');
                btn2.nextElementSibling.classList.remove('show');
            }
        })
    })

    // btn.addEventListener('blur', ()=>{
    //     btn.classList.remove('done');
    //     btn.nextElementSibling.classList.remove('show');
    // })
})


