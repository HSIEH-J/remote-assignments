//countAandB(input) 

var input="";
var a;
var b;

function countAandB(input){
    inupt=[];
    var x=0;
    while(x<input.length){
        if (input[x]="a"){
           a+= 1;
        }else if(input[x]="b"){
           b+=1
        }
      x++;
    }
}

console.log(a + "a letters and" + b + "b letters");

// to Number

var number =[];
var input2 ="";

function toNumber(input2){
    input2=[];
    var x =0;
    while(x<input2.length){
        if(input2[x]="a"){
            number.push(1);
        }else if(input2[x]="b"){
            number.push(2);
        }else if(input2[x]="c"){
            number.push(3);
        }else if(input2[x]="d"){
            number.push(4);
        }else if(input2[x=]"e"){
            number.push(5);
        }
      x++;
    }

    if(var t=0;t<number.length;t++){
        console.log(number[t]);
    }

}
