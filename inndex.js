//Ques 1

let num=8;

if(num%2==0){
    console.log("This is Even num");
}
else{
    console.log("this is odd");
    
}

//Ques 2

let num1=8;
let num2=20;

if(num1>num2){
    console.log("num1 is greatest");
    
}
else{
    console.log("num2 is greatest");
    
}

//Ques 3

let a=5;
let b=10;
let c=9;

if(a>b && a>c){
    console.log("a is greatest");
    
}
else if(b>c && b>a){
    console.log("b is greatest");
    
}
else if(c>a && c>b){
    console.log("c is greatest");
    
}
else{
    console.log("two or three num are equal");
    
}

//Ques 4

function evalNumbers(n1, n2 ,operation) {

switch(operation){
    case 'add':
        console.log(n1+n2);
        break;
        
    case 'subtract':
        console.log(n1-n2);
            break;

    case 'multiply':
        console.log(n1*n2);
        break;

    case 'divide':
        if(n2 !== 0){
            console.log(n1/n2);
            
        }
        else{
            console.log("error");
            
        }
     
    case 'modulus':
        if(n2 !== 0){
            console.log(n1%n2);
            
        }
        else{
            console.log("error");
            
        }
            

        default:
            console.log('Error: Invalid operation');
            break;
     
    }
}

evalNumbers(20,2 ,'subtract');       

//Ques 5


function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("leap year");
    } else {
        console.log("not a leap year");
    }
}

checkLeapYear(2015);