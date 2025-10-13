// rest operator
function addNumber(...num){
   
    let sum=0;

    for(let n of num){
        sum+=n;
    }

  return sum;
    
}

console.log(addNumber(10));
console.log(addNumber(10,20));
console.log(addNumber(10,20,30));
console.log(addNumber(10,20,30,40));