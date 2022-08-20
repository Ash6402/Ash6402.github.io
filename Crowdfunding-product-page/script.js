let btn = document.querySelector('.menu-btn');
let navList = document.querySelector('.nav-list');
let bookmarkBtn = document.querySelector('#bookmark-btn');
let bookmarkIcon = document.querySelector('.bookmark-icon');
let headingBtn = document.querySelectorAll('.heading-btn');
let modalClose = document.querySelector('.modal-closeBtn');
let modalBacker = document.querySelector('.backer-modal');
let radioInputs = document.querySelectorAll('input[type="radio"]');
let backerBtn = document.querySelector("#backerBtn");
let bambooStandBtn = document.querySelector('#bambooStand-Btn')
let besBtn = document.querySelector("#BES-Btn");
let numberInputs = document.querySelectorAll('.number');
let success = document.querySelector("#success-modal-overlay");
let successClose = document.querySelector("#successModal-Close");

btn.addEventListener('click', ()=>{

    navList.classList.toggle('show');

    if(navList.classList.contains('show')){
        btn.setAttribute('src', './images/icon-close-menu.svg');

    }else{
        btn.setAttribute('src', './images/icon-hamburger.svg');
    }

})

bookmarkBtn.addEventListener('click', ()=>{
    bookmarkIcon.classList.toggle('bookmarked');
    let span = document.querySelector('.bkmrk');
    span.classList.toggle('hide');
})

backerBtn.addEventListener('click', ()=>{
    modalBacker.setAttribute('open', null);
    modalBacker.scrollIntoView();
})

bambooStandBtn.addEventListener('click', ()=>{
    RewardSelection(radioInputs[1]);
    unCheck(radioInputs[0]);
    unCheck(radioInputs[2]);
})

besBtn.addEventListener('click', ()=>{
    RewardSelection(radioInputs[2]);
    unCheck(radioInputs[0]);
    unCheck(radioInputs[1]);
})



radioInputs.forEach((e)=>{
    e.addEventListener('click', ()=>{
        e.parentElement.parentElement.classList.add('selected');
        e.parentElement.parentElement.lastElementChild.classList.remove('hide');
        radioInputs.forEach((e2)=>{
            if(e2 != e){
                unCheck(e2);
            }
        })
    })
})

headingBtn.forEach((btn)=>{

    btn.addEventListener('click', ()=>{

        let radio = btn.parentElement.parentElement.previousElementSibling;
        
        radio.checked = true;
        radio.parentElement.parentElement.classList.add('selected');
        btn.parentElement.parentElement.parentElement.parentElement.lastElementChild.classList.remove('hide');

        headingBtn.forEach((btn2)=>{
            if(btn2 != btn){
                let radio2 = btn2.parentElement.parentElement.previousElementSibling;
                radio2.parentElement.parentElement.classList.remove('selected');
                radio2.checked = false;
                btn2.parentElement.parentElement.parentElement.parentElement.lastElementChild.classList.add('hide');
            }
        })

    })

})

modalClose.addEventListener('click', ()=>{
    modalBacker.removeAttribute('open');
    radioInputs.forEach((e)=>{
        e.parentElement.parentElement.classList.remove('selected');
        e.checked = false;
        e.parentElement.parentElement.lastElementChild.classList.add('hide');
    })
})

numberInputs.forEach(input=>{
    if(input == numberInputs[0]){
        input.addEventListener('keyup', ()=>{
            if(input.value < 25){
                input.style.outline = "1px solid red";
            }else{
                input.style.outline = "";
                clearData(input);
            }
        })
    }else if(input == numberInputs[1]){
        input.addEventListener('keyup', ()=>{
            if(input.value < 75){
                input.style.outline = "1px solid red";
            }else{
                input.style.outline = "";
                clearData(input);
            }
        })
    }
})

successClose.addEventListener('click', ()=>{
    success.classList.remove('show-modal');
})

let RewardSelection = input =>{
    modalBacker.setAttribute('open', null);
    input.parentElement.parentElement.scrollIntoView({block: "center"});
    input.checked = true;
    input.parentElement.parentElement.classList.add('selected');
    input.parentElement.parentElement.lastElementChild.classList.remove('hide');
}

let unCheck = selector =>{
    selector.parentElement.parentElement.classList.remove('selected');
    selector.checked = false;
    selector.parentElement.parentElement.lastElementChild.classList.add('hide');
}

let clearData = data =>{
    data.nextElementSibling.addEventListener('click', ()=>{
        success.classList.add('show-modal');
        modalBacker.removeAttribute('open');
        radioInputs.forEach((e)=>{
            e.parentElement.parentElement.classList.remove('selected');
            e.checked = false;
            e.parentElement.parentElement.lastElementChild.classList.add('hide');
        })
        numberInputs.forEach((e)=>{
            e.value = "";
        })
    })
}