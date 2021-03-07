let message = document.querySelector('.title');
message.addEventListener('click', () =>{
    message.textContent="Have a Good Time!";
});

let button = document.querySelector('.button');
let hide = document.querySelector('.hide');
hide.style.display = 'none';
button.addEventListener('click', () =>{
    if(hide.style.display == 'none'){
        hide.style.display = 'block';
    } else {
        hide.style.display = 'none'
    }
})


