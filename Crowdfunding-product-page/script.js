let menuBtn = document.querySelector('.menu-btn'); //--For Nav / Dropdown-menu--
let navList = document.querySelector('.nav-list'); //--For Nav / Dropdown-menu--

let bookmarkBtn = document.querySelector('#bookmark-btn'); //--For Bookmark--
let bookmarkIcon = document.querySelector('.bookmark-icon'); //--For Boomark--

let backerBtn = document.querySelector("#backerBtn"); //--To open Backer-menu--
let modalBacker = document.querySelector('.backer-modal'); //--Backer-Modal--
let modalClose = document.querySelector('.modal-closeBtn'); //--To Close Backer-menu--

let headingBtns = document.querySelectorAll('.heading-btn'); //--For Backing-selection--
let radioInputs = document.querySelectorAll('input[type="radio"]'); //--seclection using radio-inputs--

let bambooStandBtn = document.querySelector('#bambooStand-Btn'); //--Backing by BambooStand--
let besBtn = document.querySelector("#BES-Btn"); //--Backing by Special Edition Stand--
let mseBtn = document.querySelector("#MSE-Btn");

let forms = document.querySelectorAll(".pledge-amount"); //--Input Management--
let numberInputs = document.querySelectorAll('.number'); //--Input Management--

let success = document.querySelector("#success-modal-overlay"); //--For Success Modal--
let successClose = document.querySelector("#successModal-Close"); //--For Success Modal--

let backedAmount = document.querySelector("#backer-amount"); //--For State Management--
let backersAmount = document.querySelector("#backers"); //--For State Management--
let daysLeft = document.querySelector("#days-left"); //--For State Management--
let stockAmount = document.querySelectorAll(".stock-amount"); //--To manage stocks--
let statusBar = document.querySelector(".status"); //--For updating status bar--

let bambooStand = document.querySelector("#bambooStand"); //--For Out-of-Stock Management--
let bambooStandModal = document.querySelector("#bambooStandModal"); //--For Out-of-Stock Management--
let besStand = document.querySelector("#besStand"); //--For Out-of-Stock Management--
let besStandModal = document.querySelector("#besStandModal"); //--For Out-of-Stock Management--
let mseStand = document.querySelector("#mseStand"); //--For Out-of-Stock Management--
let mseStandModal = document.querySelector("#mseStandModal"); //--For Out-of-Stock Management--

//------------------------------------------------------------------------
//------------------State Management on page opening----------------------
//------------------------------------------------------------------------

sessionStorage.setItem('totalAmount', 76280);
sessionStorage.setItem('stock1', 250);
sessionStorage.setItem('stock2', 120);
sessionStorage.setItem('stock3', 1);
sessionStorage.setItem('backers', 2789);
sessionStorage.setItem('status', 76.1);


backedAmount.innerHTML = sessionStorage.getItem('totalAmount');
backersAmount.innerHTML = sessionStorage.getItem('backers');
statusBar.style.width = (sessionStorage.getItem('status')) + '%';

let timeLeft = setInterval(()=>{
    let expiry = new Date(2022, 8, 20).getTime();
    let current = new Date().getTime();
    left = expiry - current;
    days = Math.floor(left / (1000 * 60 * 60 * 24));
    daysLeft.innerHTML = `${days}`;
}, 1000)

stockAmount[0].innerHTML = sessionStorage.getItem('stock1');
stockAmount[3].innerHTML = sessionStorage.getItem('stock1');
stockAmount[1].innerHTML = sessionStorage.getItem('stock2');
stockAmount[4].innerHTML = sessionStorage.getItem('stock2');
stockAmount[2].innerHTML = sessionStorage.getItem('stock3');
stockAmount[5].innerHTML = sessionStorage.getItem('stock3');


let stock1 = Number(sessionStorage.getItem('stock1'));
let stock2 = Number(sessionStorage.getItem('stock2'));
let stock3 = Number(sessionStorage.getItem('stock3'));

if( stock1 == 0){
   outofStock(bambooStand, bambooStandModal, forms[1]);
}

if(stock2 == 0){
    outofStock(besStand, besStandModal, forms[2]);
}

if(stock3 == 0){
    outofStock(mseStand, mseStandModal, forms[3]);
}

function outofStock(e1, e2, form){
    e1.classList.add('out-of-stock');
    e2.classList.add('out-of-stock');
    e1.lastElementChild.lastElementChild.setAttribute('disabled', null);
    e1.lastElementChild.lastElementChild.innerHTML = `Out of Stock`;
    form.children[0].setAttribute('disabled', null);
    form.children[1].setAttribute('disabled', null);
    form.children[1].innerHTML = `Out of stock`;
}

//------------------------------------------------------------------------
//-------------To Open and Close the Dropdown Menu------------------------
//------------------------------------------------------------------------


menuBtn.addEventListener('click', ()=>{
    
    navList.classList.toggle('show');
    
    if(navList.classList.contains('show')){
        menuBtn.setAttribute('src', './images/icon-close-menu.svg');
        
    }else{
        menuBtn.setAttribute('src', './images/icon-hamburger.svg');
    }
    
})

//------------------------------------------------------------------------
//-----------------------For the Bookmark Button--------------------------
//------------------------------------------------------------------------


bookmarkBtn.addEventListener('click', ()=>{
    bookmarkIcon.classList.toggle('bookmarked');
    let span = document.querySelector('.bkmrk');
    span.classList.toggle('hide');
})

//-------------------------------------------------------------------------
//-------------------Backer modal opening and closing-----------------------
//-------------------------------------------------------------------------


backerBtn.addEventListener('click', ()=>{
    modalBacker.setAttribute('open', null);
    modalBacker.scrollIntoView();
})

modalClose.addEventListener('click', ()=>{
    modalBacker.removeAttribute('open');
        radioInputs.forEach((e)=>{
        e.parentElement.parentElement.classList.remove('selected');
        e.checked = false;
        e.parentElement.parentElement.lastElementChild.classList.add('hide');
    })
})

//-------------------------------------------------------------------------
//--------------------Backer Modal functionality---------------------------
//-------------------------------------------------------------------------


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

headingBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.parentElement.parentElement.parentElement.classList.add('selected');
        btn.parentElement.previousElementSibling.checked = true;
        btn.parentElement.parentElement.parentElement.lastElementChild.classList.remove('hide');

        headingBtns.forEach((btn2)=>{
            if(btn2 != btn){
                btn2.parentElement.parentElement.parentElement.classList.remove('selected');
                btn2.parentElement.previousElementSibling.checked = false;
                btn2.parentElement.parentElement.parentElement.lastElementChild.classList.add('hide');
            }
        })
    })
})

//-------------------------------------------------------------------------
//-------------------Reward Selection Button Functionaliy------------------
//-------------------------------------------------------------------------


bambooStandBtn.addEventListener('click', ()=>{
    RewardSelection(radioInputs[1]);
    unCheck(radioInputs[0]);
    unCheck(radioInputs[2]);
    unCheck(radioInputs[3]);
})

besBtn.addEventListener('click', ()=>{
    RewardSelection(radioInputs[2]);
    unCheck(radioInputs[0]);
    unCheck(radioInputs[1]);
    unCheck(radioInputs[3]);
})

mseBtn.addEventListener('click', ()=>{
    RewardSelection(radioInputs[3]);
    unCheck(radioInputs[0]);
    unCheck(radioInputs[1]);
    unCheck(radioInputs[2]);
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

//-------------------------------------------------------------------------
//------------------For Opening and Closing Success Modal------------------
//-------------------------------------------------------------------------


let successModal = () =>{
    success.classList.add('show-modal');

    modalBacker.removeAttribute('open');
    radioInputs.forEach((e)=>{
        e.parentElement.parentElement.classList.remove('selected');
        e.checked = false;
        e.parentElement.parentElement.lastElementChild.classList.add('hide');
    })
}


successClose.addEventListener('click', ()=>{
    success.classList.remove('show-modal');
})

//-------------------------------------------------------------------------
// ------------------------ Form Management -------------------------------
//-------------------------------------------------------------------------

forms[0].addEventListener('submit', ()=>{
    successModal();
})

forms[1].addEventListener('submit', (e)=>{
    forms_and_StateManagement(e ,forms[1], 25, 'stock1', stockAmount[0], stockAmount[3]);
     
})

forms[2].addEventListener('submit', (e)=>{
    forms_and_StateManagement(e, forms[2], 75, 'stock2', stockAmount[1], stockAmount[4]);
})

forms[3].addEventListener('submit', (e)=>{
    forms_and_StateManagement(e, forms[3], 200, 'stock3', stockAmount[2], stockAmount[5]);
})

let forms_and_StateManagement = (eventObject ,form, leastAmount, stock, display1, display2) =>{

    let input = form.children[0];

    if(input.value < leastAmount){
        input.classList.add('invalid');
        eventObject.preventDefault();
    }else{

        successModal();

        let remainingStock = Number(sessionStorage.getItem(stock));
        remainingStock += -1;
        display1.innerHTML = remainingStock;
        display2.innerHTML = remainingStock;
        sessionStorage.setItem(stock, remainingStock);

        backers = Number(sessionStorage.getItem('backers'));
        ++backers;
        backersAmount.innerHTML = backers;
        sessionStorage.setItem('backers', backers);

        let totalAmount = Number(sessionStorage.getItem('totalAmount'));
        totalAmount += Number(input.value);
        backedAmount.innerHTML = `$${totalAmount}`;
        sessionStorage.setItem('totalAmount', totalAmount);

        let currentStatus = Number(sessionStorage.getItem('status')); 
        currentStatus = (totalAmount/100000)*100;
        statusBar.style.width = currentStatus+`%`;
        sessionStorage.setItem('status', currentStatus);

        if( stock == `stock1` &&  remainingStock == 0){
            outofStock(bambooStand, bambooStandModal, forms[1]);
        }
         
        if(stock == `stock2` &&  remainingStock == 0){
            outofStock(besStand, besStandModal, forms[2]);
        }
         
        if(stock == `stock3` &&  remainingStock == 0){
            outofStock(mseStand, mseStandModal, forms[3]);
        }

        input.value = null;
    }

}