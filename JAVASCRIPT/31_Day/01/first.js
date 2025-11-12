const Quote = ["hello","hye","bye","say","one","go","come"];
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    let random_number = Math.floor(Math.random()*Quote.length);
    const h1 = document.querySelector('h1');
    h1.innerHTML = Quote[random_number];
})