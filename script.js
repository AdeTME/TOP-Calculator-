let operand1,operand2,operator;

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}


function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,c){
    if ( c === "+"){
        return add(a,b);
    }
    if (c === "-"){
        return subtract(a,b);
    }
    if (c === "*"){
        return multiply(a,b);
    }
    if (c === "/"){
        return divide(a,b);
    }
}