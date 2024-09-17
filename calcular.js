const prompt = require ('prompt-sync')()
const calcular  = prompt ('digite a operaçao desejada [+], [-], [x] ou [/] ')
const num1 = parseInt(prompt("digite o primeiro numero"))
const num2 = parseInt(prompt (" digite o segundo numero"))
const adicao = num1 + num2 
const subtraçao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2

switch (calcular) {
    case "+":
        console.log (num1 + " + " + num2 + " = " +adicao  )

        break;
    case '-':
        console.log (num1 + " - " + num2 + " = " + subtraçao  )
        break;
    case 'x':
        console.log(num1 + " X " + num2 + " = " + multiplicacao )
        break;  
    case '/':
        if(num2 > 0)
         console.log(num1 + " / " + num2 + " = " + divisao)
        
        else
        console.log ("nao tem divisao por 0")
        break;

    default: console.log ("opçao invalida")
    }
