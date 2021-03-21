//Assignment 1

function delayedResult(n1, n2, delayTime, callback){
    callback(n1,n2,delayTime);
};

function A (x1,x2, dTime){
    setTimeout(() => {
        console.log(x1+x2);
    }, dTime);
}

delayedResult(4,5,3000,A);

//Assignment 2

function ajax(src, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText)
        }
    };
    xhr.open('GET', src);
    xhr.send();
};

function render(data){
    var newDiv = document.createElement('div');
    newDiv.id = "NewDiv";
    document.body.appendChild(newDiv)
    var content = document.getElementById('NewDiv');
    content.innerHTML = data; 
};

ajax("http://13.113.12.180:4000/api/1.0/remote-w4-data",render);





