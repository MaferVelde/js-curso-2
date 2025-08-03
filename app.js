let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function clickConsola() {
    alert("El botón fue clicado");
}

function clickAlerta() {
    let ciudad = ("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function clickPrompt() {
    alert("Yo amo JS");
}

function clickSuma() {
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert('${primerNumero} + ${segunNumero} = ${resultado}')
}
    
