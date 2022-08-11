fetch("data.json")
.then(response => response.json())
.then(data => {
    
    let cards = document.querySelectorAll('.card');
    let btns = document.querySelectorAll('.btn');

    let i = 0;

    btns[1].classList.add('active');

    let weekly = () => {

        cards.forEach((card)=>{

            card.lastElementChild.childNodes[3].innerText = `${data[i].timeframes.weekly.current}hrs`;
            card.lastElementChild.childNodes[7].innerText = `last week - ${data[i].timeframes.weekly.previous}hrs`;

            ++i;

        })

    }

    weekly();

    btns.forEach((btn)=>{

        btn.addEventListener('click', ()=>{

            btn.classList.add('active');

            btns.forEach((btn2)=>{

                if(btn2 != btn){
                    btn2.classList.remove('active');
                }

            })

            if(btn.innerText == 'Daily'){

                i = 0;

                cards.forEach((card)=>{

                    card.lastElementChild.childNodes[3].innerText = `${data[i].timeframes.daily.current}hrs`;
                    card.lastElementChild.childNodes[7].innerText = `yesterday - ${data[i].timeframes.daily.previous}hrs`;

                    ++i;
            
                })

            }else if(btn.innerText == 'Weekly'){

                i = 0;

                weekly();

            }else if(btn.innerText == 'Monthly'){

                i = 0;

                cards.forEach((card)=>{

                    card.lastElementChild.childNodes[3].innerText = `${data[i].timeframes.monthly.current}hrs`;
                    card.lastElementChild.childNodes[7].innerText = `last month - ${data[i].timeframes.monthly.previous}hrs`;

                    ++i;
            
                })

            }


        })

    })

})