console.log("Hello world!");



function returnEvenValues(array){ 

    let evenNums=[];
    for(let i = 0; i < array.length ; i++){ 

        if(array[i] % 2 === 0){ 
            evenNums.push(array[i]);
        }
    }
    console.log('Numeros pares são',evenNums);

}

let array = [1,2,4,5,8,10];
returnEvenValues(array);