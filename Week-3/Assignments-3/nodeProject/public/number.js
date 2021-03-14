const button = document.getElementById('button');
let answer = document.getElementById('answer');
let get;

button.addEventListener('click', () =>{
    
    document.getElementById('number').innerHTML = " ";

    get = Number(answer.value);

    var game = new XMLHttpRequest();
    game.onreadystatechange = function () {
    if (game.readyState === 4) {
        document.getElementById('result').innerHTML = `The answer is: ${game.responseText}`;
    }
    };
    game.open('GET', `http://localhost:3000/data?number=${get}`);
    game.send();
});


