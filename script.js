const valor1 = document.querySelector('#num1');
const valor2 = document.querySelector('#num2');
const submitButton = document.querySelector('#button-submit');
const container = document.querySelector('.container');
const formulario = document.querySelector('.form');
const paragrafo = document.querySelector('.paragrafo');


function validadeNumero ( num1, num2) {

        let resultado = 3;

        if( num1 < num2) {
                resultado = 1;
        } else if ( num1 > num2 ) {
                resultado = 2;
        }

        return resultado;

}


submitButton.addEventListener('click', event => {
        event.preventDefault();

        let value1 = valor1.value;
        console.log(value1);

        let value2 = valor2.value;
        console.log(value2);

        formulario.style.display = 'none';

        const messagePos = `O número <b>${value1}</b> é menor que <b>${value2}</b>!`;
        const messageNeg = `O número <b>${value1}</b> é maior que <b>${value2}</b>!`;
        const messageIgual = `O número <b>${value1}</b> é igual a <b>${value2}</b>`;


        const resultado = validadeNumero(value1, value2);
        console.log(resultado);

        if (resultado === 1) {        

           paragrafo.style.display = "block";
           paragrafo.innerHTML = messagePos;

           setTimeout(() => {

              paragrafo.style.display = "none";
              formulario.style.display = "block";

              valor1.value= "";
              valor2.value = "";
              
           }, 3000);

        } else if (resultado === 2) {  

           paragrafo.style.display = "block";
           paragrafo.innerHTML = messageNeg; 

           setTimeout(() => {

              paragrafo.style.display = "none";
              formulario.style.display ="block";

              valor1.value = "";
              valor2.value = "";

           }, 3000);

        } else {

              paragrafo.style.display = "block";
              paragrafo.innerHTML = messageIgual; 

              setTimeout (() => {
                paragrafo.style.display = "none";
                formulario.style.display ="block";

                valor1.value = "";
                valor2.value = "";
              }, 3000);

        }

        

});

