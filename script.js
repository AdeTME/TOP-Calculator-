let operand1 = "", operand2 = "", operator = undefined; // at the top

let displayArea = document.querySelector("#displayArea");
displayArea.style.backgroundColor="grey";
displayArea.style.fontFamily="'Times New Roman', Times, serif";

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

const btn = document.querySelectorAll("#Calc > .row > button");

function givenInput(elements) {//Need heavy work on the logic to get the number values and append them to something... maybe a string. 
    elements.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = "grey";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "";
        });
        btn.addEventListener("click", () => {
    displayArea.textContent += btn.value;

    if ("0123456789".includes(btn.value)) {
        if (operator === undefined) {   // no operator yet → building operand1
            operand1 += btn.value;
            console.log("op1:", operand1);
        } else {                        // operator set → building operand2
            operand2 += btn.value;
            console.log("op2:", operand2);
        }
    }

    if ("+-*/".includes(btn.value)) {
        operator = btn.value;
        console.log("operator:", operator);

    }

    if (btn.value === "=") {
        const result = operate(Number(operand1), Number(operand2), operator);

        displayArea.textContent = result;
        operand1 = String(result);
        operand2 = "";
        operator = undefined;
    }
    if(btn.value==="clear"){
        operand1 = "";
        operand2 = "";
        operator = undefined;   
        displayArea.textContent=""; 
    }
});

    const nonDisplay = ["=", "clear"];
    if (!nonDisplay.includes(btn.value)) {
        displayArea.textContent += btn.value;
}

    });


}

givenInput(btn);


