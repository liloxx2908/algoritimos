let contador = 0
for (let numero = 1; numero <= 10; numero++) {
    let ehPrimo = true;


    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;  // Se encontrar um divisor, sai do loop
        }
    }    if (ehPrimo) 
        {
        contador --

            console.log(numero + " é primo");
    }
    else   {
        console.log(numero + "não  é primo");
    }
   
}
console.log ("os numeros nao primos sao", contador)