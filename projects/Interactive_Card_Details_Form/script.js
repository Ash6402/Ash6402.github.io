let cardNumber = document.querySelector('#cardNumber');
let cardNumDisplay = document.querySelector('#cardNum');
let personName = document.querySelector('#cardHolder');
let nameDisplay = document.querySelector('#name');
let month = document.querySelector('#month');
let monthDisplay = document.querySelector('#monthDisplay');
let year = document.querySelector('#year');
let yearDisplay = document.querySelector('#yearDisplay');
let cvc = document.querySelector('#cvc');
let cvcDisplay = document.querySelector('#cvcDisplay');
let inputs = document.querySelectorAll('input');
let seperateError = document.querySelector('.separateError');
let form = document.querySelector('.form');
let compeletion = document.querySelector('.completed');
let submitBtn = document.querySelector('.submit-btn');

inputs.forEach((input)=>{

    input.addEventListener('focus', ()=>{
        
        ValidationTest();

    })

})

cardNumber.addEventListener('keydown', (e)=>{
    if(e.keyCode != 8){

        let length = cardNumber.value.length;

        if( length == 4 || length == 9 || length == 14){

            cardNumber.value += " ";

        }

    }
})

cardNumber.addEventListener('keyup', ()=>{

    x = cardNumDisplay.innerHTML;

    y = cardNumber.value.padEnd(19, "0");

    z = Array.from(y);

    z[4] = " ";
    z[9] = " ";
    z[14] = " ";

    w = z.join("");

    cardNumDisplay.innerHTML = w;

    if(/[^0-9]+$/.test(cardNumber.value)){
    
        cardNumber.style.outline = "1px solid #f00";

        cardNumber.classList.add('invalid');

        cardNumber.nextElementSibling.innerText = "Card Number can only contain digits"

    }else if(cardNumber.value.length > 0){

        cardNumber.style.outline = "none";

        cardNumber.classList.remove('invalid');

        cardNumber.nextElementSibling.innerText = "";

    }

    if(cardNumber.value == ""){

        cardNumber.style.outline = "1px solid #f00"; 

        cardNumber.classList.add('invalid');

        cardNumber.nextElementSibling.innerText = "Fields cannot be empty";

    }

    if(cardNumber.value.length < 19){

        cardNumber.style.outline = "1px solid #f00";

        cardNumber.classList.add('invalid');

    }else{

        cardNumber.style.outline = "none"

        cardNumber.classList.remove('invalid');


    }

})

personName.addEventListener('keyup', ()=>{

    nameDisplay.innerText = personName.value;

    if(/[0-9]/.test(personName.value)){

        personName.style.outline = "1px solid #f00"

        personName.classList.add('invalid');

        personName.nextElementSibling.innerText = "Name can only contain alphabets";

    }else if(personName.value.length > 0){

        personName.style.outline = "none"

        personName.classList.remove('invalid');

        personName.nextElementSibling.innerText = "";

    }

    if(personName.value == ""){

        personName.style.outline = "1px solid #f00"

        personName.classList.add('invalid');

        personName.nextElementSibling.innerText = "Field cannot be empty";

    }

})

month.addEventListener('keyup', ()=>{

    let val = month.value;

    val = val.padEnd(2, "0");

    monthDisplay.innerHTML = val;

    ValidationTest();
    
    if(month.value.length < 2 || month.value < 1 || month.value > 12){

        month.style.outline = "1px solid #f00"

        month.classList.add('invalid');

    }else{
        month.style.outline = "none"

        month.classList.remove('invalid');
    }

})

year.addEventListener('keyup', ()=>{

    let val = year.value;

    val = val.padEnd(2, "0");

    yearDisplay.innerHTML = val;

    ValidationTest();

    if(year.value.length < 2){

        year.style.outline = "1px solid #f00"

        year.classList.add('invalid');

    }else{
        year.style.outline = "none"

        year.classList.remove('invalid');
    }

})

cvc.addEventListener('keyup', ()=>{

    let val = cvc.value;

    val = val.padEnd(3, "0");

    cvcDisplay.innerHTML = val;

    ValidationTest();

    if(cvc.value.length < 3){

        cvc.style.outline = "1px solid #f00"

        cvc.classList.add('invalid');

    }else{
        cvc.style.outline = "none"

        cvc.classList.remove('invalid');
    }

})

let ValidationTest = () =>{

    if(personName.value == ""){
        personName.style.outline = "1px solid #f00"
        personName.classList.add('invalid');
        personName.nextElementSibling.innerText = "Fields cannot be empty";
    }

    if(cardNumber.value == ""){
        cardNumber.style.outline = "1px solid #f00"; 
        cardNumber.classList.add('invalid');
        cardNumber.nextElementSibling.innerText = "Fields cannot be empty";
    }

    if(month.value == "" || month.value.length < 2 || month.value < 0 || month.value > 12){
        month.style.outline = "1px solid #f00";
        month.classList.add('invalid');
    }else{
        month.style.outline = "none";
        month.classList.remove('invalid');
    }

    if(year.value == "" || year.value.length < 2){
        year.style.outline = "1px solid #f00";
        year.classList.add('invalid');
    }else{
        year.style.outline = "none";
        year.classList.remove('invalid');
    }

    if(cvc.value == "" || cvc.value.length < 3){
        cvc.style.outline = "1px solid #f00";
        cvc.classList.add('invalid');
    }else{
        cvc.style.outline = "none";
        cvc.classList.remove('invalid');
    }

    if(month.value == "" || year.value == "" || cvc.value == ""){
        seperateError.innerText = "Fields cannot be empty";
    }

    if((month.value.length > 0) && (year.value.length > 0) && (cvc.value.length > 0)){
        seperateError.innerText = "";
    }

}

form.addEventListener('submit', (e)=>{

    i=0;
    
    inputs.forEach((input)=>{

        if(input.classList.contains('invalid') || input.value.length == 0){

        e.preventDefault();

        ++i

        }

    })

    console.log(i);

    if(i==0){

        compeletion.classList.add('show');

    }

})