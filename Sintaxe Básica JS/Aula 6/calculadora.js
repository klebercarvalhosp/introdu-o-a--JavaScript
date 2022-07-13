

function calculadora(){ 
    const operacao = prompt('Escolha uma operação\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Divisão Inteiro (%)\n 6 - Potenciação (**)\n');


let n1  = Number(prompt ('Insira o primeiro valor:')); 
let n2 = Number(prompt('Insira o segundo valor:')); 
let resultado; 

function soma(){ 
    resultado = n1 + n2; 
    alert = (`${n1} + ${n2} = ${resultado}`)
}
if (operacao == 1){ 
    soma();
}else if(operacao == 2){ 
    subtracao();
}else if(operacao == 3){ 
    multiplicacao();
}else if(operacao == 4){ 
    divisaoReal();
}else if(operacao == 5){ 
    divisaoInteiro();
}else if(operacao == 6){ 
    potenciacao();
}
}
calculadora();