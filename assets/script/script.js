//capturar evento do submit

const form = document.getElementById('form');
const result = document.getElementById('result')

form.addEventListener('submit', function(event){
    event.preventDefault();
    result.innerHTML = "";

    const inputPeso = event.target.querySelector('input[name = "peso"]');
    const inputAltura = event.target.querySelector('input[name = "altura"]');
    const p = createParagraph();

    if (!inputAltura.value || !inputPeso.value){
        p.classList.add('incorrect-result');
        p.innerHTML = "Valores não podem ser vazios"
        result.appendChild(p);
    } else if(isNaN(inputPeso.value) || isNaN(inputAltura.value)){
        p.classList.add('incorrect-result');
        p.innerHTML = "Por favor, digite apenas números"
        result.appendChild(p);
    } else {
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const resultado = calcIMC(peso, altura).toFixed(2);

        p.classList.add('correct-result');
        p.innerHTML = resultado;
        result.appendChild(p);
    }
})

function createParagraph(){
    return document.createElement('p');
}

function calcIMC(peso, altura){
    return peso / (altura ** 2);
}