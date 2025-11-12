const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(e.target.boy.value);
    let boy = String(e.target.boy.value).length;
    let girl = String(e.target.girl.value).length;
 
   let result = (girl+boy);
   let finall = Math.pow(result,3)%101;
    const h4 = document.querySelector('h4');
    h4.innerHTML = `Result: ${finall}%`;
    form.reset();
})