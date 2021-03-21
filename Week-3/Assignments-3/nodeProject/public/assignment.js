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





