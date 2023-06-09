const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn1 = document.querySelector('#btn1');
const presult = document.querySelector('.result');
const gato = document.querySelector('.gato');

function btnOnclick() {
    const suma = Number(input1.value) + Number(input2.value);
    presult.innerText = suma;
}

function btnOnclickgato(){
    
}

addEventListener('click', btnOnclickgato());
btn1.addEventListener('click', btnOnclick())