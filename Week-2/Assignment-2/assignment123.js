//Assignment1: Function and Array

//1.max

let num = [10,-5,-6,-7,12];
let biggest = 0;
let x = 0;

function max(numbers){
    for(let y =0;y<numbers.length;y++) {
        for(let i =0;i<numbers.length;i++){
            if (numbers[y]>numbers[i]){
                x+=1;
            }  
        }  
        if (x === numbers.length-1){
            biggest = numbers[y];
            return biggest;
        }
        x=0;
    }
}

console.log(max(num));

//2.findPosition

let num = [10,5,6,7,12];
let pos;

function findPosition(numbers,target){
        for(let i =0;i<numbers.length;i++){
            if(numbers[i]===target){
                pos = i;
                return pos
            }
        }

        if(!pos){
            return -1;
        }
}

console.log(findPosition(num,13));

//Assignment2: Function, Array, and Object

let sum = 0;

function avg(data){
    for(let i =0;i<data.products.length;i++){
        sum += data.products[i].price
    }
    return sum / data.size;
}

console.log(
    avg({
        size:3,
        products:[
            {
                name: "Product1",
                price: 100
            },
            {
                name: "Product2",
                price: 700
            },
            {
                name: "Product3",
                price: 250
            },
        ]
    })
)

//Assignment3: Data Manipulation

//1.count

let letters = ['a','b','a','a','c','b'];


function count(input){
    let characters = {};
    for(let i =0;i<input.length;i++){
        if(characters.hasOwnProperty(input[i])){
            characters[input[i]] +=1
        }else {
            characters[input[i]] = 1;
        }
    }

    return characters;

}

console.log(count(letters));

//2.groupByKey

let input2 =[
    {key:'a', value: 3},
    {key:'b', value: 1},
    {key:'c', value: 2},
    {key:'a', value: 3},
    {key:'c', value: 5},
]

function count(input){
    let characters = {};
    for(let i =0;i<input.length;i++){
        if(characters.hasOwnProperty(input[i].key)){
            characters[input[i].key] +=input[i].value;
        }else {
            characters[input[i].key] = input[i].value;
        }
    }

    return characters;

}

console.log(count(input2));