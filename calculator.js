const output = document.getElementById('output');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('btn-clear');
const equal = document.getElementById('btn-equal');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        output.value += value;
    })
})

equal.addEventListener('click', () => {
    if(output.value != '') {
       
        let answer = eval(output.value);
        output.value = answer;
    }
})

clear.addEventListener('click', () => {
    output.value = '';
})