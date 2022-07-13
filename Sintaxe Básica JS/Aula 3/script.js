


let array = ['string',1,true]; 


let array1 = ['String', 1 , true, ['array1']];


array.forEach(function(item,index){console.log(item,index)});


array.push('novo item');

console.log(array); 

array.pop(); 

array.shift(); 

array.unshift();
 
console.log (array.indexOf(true));

array.splice(0,3); 



let object = {string: 'string', number:1, Boolean: true, array["array"],objectInterno:}