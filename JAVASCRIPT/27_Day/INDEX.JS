let arr = [20,30,40,50,87];

arr.fillting = function (compera){

    let Ans = [];
    for( let num of arr){
        if(compera(num)){
            Ans.push(num);
        }
    }
    return Ans;
}

let newArr =  arr.fillting((number)=>number>25);
console.log(newArr);

