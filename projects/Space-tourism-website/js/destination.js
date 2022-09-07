fetch('./js/data.json')
.then(obj => obj.json())
.then(data => {
    
    const destinations = data.destinations;
    const btns = document.querySelectorAll('.btn');
    const text = document.querySelector('.text');
    const planetName = document.querySelector('.planet-name')
    const img = document.querySelector('#img');
    const distance = document.querySelector('#distance');
    const time = document.querySelector('#time');

    dataFunction(0);
    btns[0].classList.add('btn-active');

    btns.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            btn.classList.add('btn-active');
            btns.forEach((btn2) =>{
                if(btn2 != btn){
                    btn2.classList.remove('btn-active');
                }
            })
            let num = btn.getAttribute('data-index');
            console.log(num);
            dataFunction(num);
        })
    })

    window.addEventListener('keydown', (e)=>{
        let current = document.querySelector('.btn-active');

        if(e.code == 'ArrowRight'){
            if(current.parentElement.nextElementSibling !== null){
                let next = current.parentElement.nextElementSibling.children[0];
                next.classList.add('btn-active');
                current.classList.remove('btn-active');
                let number = Number(next.getAttribute('data-index'));
                dataFunction(number);
            }
        }else if(e.code == 'ArrowLeft'){
            if(current.parentElement.previousElementSibling !== null){
                let prev = current.parentElement.previousElementSibling.children[0];
                prev.classList.add('btn-active');
                current.classList.remove('btn-active');
                let number = Number(prev.getAttribute('data-index'));
                dataFunction(number);
            }

        }
    })

    function dataFunction(num){
        const imgPath = destinations[num].images.webp;
        text.innerText = destinations[num].description;
        img.setAttribute('src', imgPath);
        planetName.innerText = destinations[num].name;
        distance.innerText = destinations[num].distance;
        time.innerText = destinations[num].travel;
    }

})