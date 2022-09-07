fetch('./js/data.json')
.then(obj => obj.json())
.then(data =>{

    const crew = data.crew;
    const name = document.querySelector('.h3');
    const role = document.querySelector('.h2');
    const bio = document.querySelector('.text');
    const person = document.querySelector('#personImg');
    const btns = document.querySelectorAll('.btn');

    memberData(0);
    btns[0].classList.add('crew-active');

    console.log(data.crew);

    btns.forEach((btn)=>{
        btn.addEventListener('click', ()=>{

            btn.classList.add('crew-active');
            btns.forEach(btn2=>{
                if(btn2 != btn){
                    btn2.classList.remove('crew-active');
                }
            })
            let n = btn.getAttribute('data-index');
            memberData(n);
        })

    })

    window.addEventListener('keydown', (e)=>{
        let current = document.querySelector('.crew-active');
        if(e.code == "ArrowRight"){
                if(current.parentElement.nextElementSibling !== null){
                let next = current.parentElement.nextElementSibling.children[0];
                let number = Number(next.getAttribute('data-index'));
                next.classList.add('crew-active');
                current.classList.remove('crew-active');
                memberData(number);
            }

        }else if(e.code == "ArrowLeft"){
            if(current.parentElement.previousElementSibling !== null){
                let prev = current.parentElement.previousElementSibling.children[0];
                let number = Number(prev.getAttribute('data-index'));
                prev.classList.add('crew-active');
                current.classList.remove('crew-active');
                memberData(number);
            }
        }
    })

    function memberData(n){
        name.innerText = crew[n].name;
        role.innerText = crew[n].role;
        person.setAttribute('src', crew[n].images.webp);
        bio.innerText = crew[n].bio;
    }

})