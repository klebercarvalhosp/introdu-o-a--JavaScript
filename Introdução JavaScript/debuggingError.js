
function validaArray(arr,num){ 

    try{ 
    //tratando um erros caso vem sem nenhum valor os parametros
    if(!arr && !num)throw new ReferenceError('Envie os parametros');

    if(typeof arr !== `object`) throw new TypeError ('Array precisa ser do tipo objeto'); 

    if(typeof num !== `number`) throw new TypeError ('Num precisa ser do tipo number'); 

    if(arr.length !== num) throw new RangeError ('Tamanho inválido');

    return arr; 
    }
    //tratando erros pelo nome do erro
    catch(e){ 
        // se o erro for ReferenceError
        if(e instanceof ReferenceError){ 
            console.log("Este erro e um ReferenceErro!");
            console.log(e.message);
        } else if(e instanceof TypeError){ 
            console.log("Este erro e um TypeError!");
            console.log(e.message);
        }
        else if(e instanceof RangeError){ 
            console.log("Este erro e um RangeError!");
            console.log(e.message);
        }
        else{ 
            console.log("Tipo de erro nao esperado"+ e);
        }
    }
}

console.log(validaArray(5,5));