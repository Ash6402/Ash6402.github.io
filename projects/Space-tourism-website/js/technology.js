fetch('./js/data.json')
.then(obj => obj.json())
.then(data =>{

    const techData = data.technology;
    const btns = document.querySelectorAll('.btn');
    const info = document.querySelector('.text');
    const img = document.querySelector('#techImg');
    const name = document.querySelector('.h3');

    techDataFunction(0);
    btns[0].classList.add('btn-active');
    imageCheck();

    window.addEventListener('resize', ()=>{
        imageCheck();
    })

    window.addEventListener('keydown', (e)=>{
        let current = document.querySelector('.btn.btn-active');
        if(e.code == 'ArrowRight' || e.code == 'ArrowDown'){
            if(current.parentElement.nextElementSibling !== null){
                let next = current.parentElement.nextElementSibling.children[0];
                next.classList.add('btn-active');
                current.classList.remove('btn-active');
                let number = Number(next.getAttribute('data-index'));
                techDataFunction(number);
            }
        }else if(e.code == 'ArrowLeft' || e.code == 'ArrowUp'){
            if(current.parentElement.previousElementSibling !== null){
                let prev = current.parentElement.previousElementSibling.children[0];
                prev.classList.add('btn-active');
                current.classList.remove('btn-active');
                let number = Number(prev.getAttribute('data-index'));
                techDataFunction(number);
            }
        }

    })

    btns.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            btn.classList.add('btn-active');
            btns.forEach(btn2=>{
                if(btn2!=btn){
                    btn2.classList.remove('btn-active');
                }
            })

            let num = Number(btn.getAttribute('data-index'));

            techDataFunction(num);
        })
    })

    function techDataFunction(num){
        info.innerText = techData[num].description;
        name.innerText = techData[num].name;
        if(window.innerWidth < 1023){
            img.setAttribute('src', techData[num].images.landscape);
        }else{
            img.setAttribute('src', techData[num].images.portrait);
        }
    }

    function imageCheck(){
        let imgSrc = img.getAttribute('src');
        if(window.innerWidth > 1023){
            let portrait = imgSrc.replace('landscape', 'portrait');
            img.setAttribute('src', portrait);
        }else{
            let landscape = imgSrc.replace('portrait', 'landscape');
            img.setAttribute('src', landscape);
        }
    }

})