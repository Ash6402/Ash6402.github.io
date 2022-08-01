const inputs = document.querySelectorAll('.input');
const btns = document.querySelectorAll('.percent');
const customBtn = document.querySelector('.custom-btn');
const customInput = document.querySelector('.custom-input');
const peopleInput = document.querySelector('#people');
const resetBtn = document.querySelector('.reset-btn');
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
let percent = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        btn.classList.add('active');     
        
        btns.forEach(function(other){
            if(other !== btn){
                other.classList.remove('active');
            }
        })

        customBtn.classList.remove('hide');
        customInput.classList.add('hide');
        customInput.value = null;

        percent = Number(btn.innerText.slice(0, -1));

        calculate();
    })  
})

inputs[0].addEventListener('keyup', function(){
    calculate();
})

customBtn.addEventListener('click', function(){
    customBtn.classList.add('hide');
    customInput.classList.remove('hide');
    customInput.focus();
})

customInput.addEventListener('keyup', function(){
    percent = Number(this.value);

    calculate();

    if(customInput.value > 0){
        btns.forEach(function(btn){
            btn.classList.remove('active');
        })
    }

    if(customInput.value.length == 0){
        output1.innerText = "$0.00";
        output2.innerText = "$0.00";
    }
})

customInput.addEventListener('focusout', function(){
    if(this.value.length == 0){
    customInput.classList.add('hide');
    customBtn.classList.remove('hide');
}
})

peopleInput.addEventListener('keyup', function(){

    calculate();

    if(peopleInput.value.length == 0 && output1.innerText == "$0.00" && output2.innerText == "$0.00"){
        resetBtn.classList.remove('active');
    }

    if(peopleInput.value == 0){
        peopleInput.classList.add('invalid');
        output1.innerText = "$0.00";
    }
    
    if(peopleInput.value.length == 0 || peopleInput.value > 0){
        peopleInput.classList.remove('invalid');
    }

    if(peopleInput.value.length == 0){
        output1.innerText = "$0.00";
    }
})

resetBtn.addEventListener('click', function(){

    if(output1.innerText != "$0.00"){
        output1.innerText = "$0.00";
        output2.innerText = "$0.00";
        percent = 0;

        btns.forEach(function(btn){
            btn.classList.remove('active');
        })
        
        inputs.forEach(function(input){
            input.value = null;
        })

        customInput.classList.add('hide');
        customBtn.classList.remove('hide');
        peopleInput.classList.remove('invalid');

        resetBtn.classList.remove('active');
    }
    
})

function calculate(){

    if(inputs[0].value.length != 0 && percent != 0 && peopleInput.value.length != 0){

        let bill = inputs[0].value;

        let tipAmount = ((bill * percent) / 100).toFixed(2);
        let total = (tipAmount * peopleInput.value).toFixed(2);
        output1.innerText = "$"+tipAmount;
        output2.innerText = "$"+total;

        resetBtn.classList.add('active');
    }else{
        output1.innerText = "$0.00";
        output2.innerText = "$0.00";
    }
}