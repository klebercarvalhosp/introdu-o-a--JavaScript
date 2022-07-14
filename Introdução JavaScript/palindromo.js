
// funcao 01
function verificaPalindromo(string){ 
    ///verifica se ela e nula 
    if (!string) return 'string inexistente'; 
    return string.split("").reverse().join("") === string; 

}
console.log(verificaPalindromo("ovo"));

// solucao 02 

function verificaPalindromo2(string){ 
    ///verifica se ela e nula 
    if (!string) return 'string inexistente'; 

    for (let i =0; i < string.lenght / 2 ; i++){ 
        if (string[i] !== string[string.lenght -1 - i]){ 
        return false; 
        }
    }
    return true;
}

console.log(verificaPalindromo2(abba));
