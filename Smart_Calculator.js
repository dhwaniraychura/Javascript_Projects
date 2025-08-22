let display = document.getElementById("display");
function toDisplay(value) {
     if (display.value.length < 10) { 
        display.value += value;
    }
}
function toClear() {
    display.value = "";
}
function toDel() {
    display.value = display.value.slice(0, -1);
}
function toSquare(){
    let num = Number(display.value);  
     if (isNaN(num) || display.value.includes("+") || display.value.includes("-") || display.value.includes("x") || display.value.includes("÷")) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1000);
        return;
    }
    display.value = num * num;        
}
function toCube(){
    let num = Number(display.value); 
     if (isNaN(num) || display.value.includes("+") || display.value.includes("-") || display.value.includes("x") || display.value.includes("÷")) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1000);
        return;
    } 
    display.value = num * num * num;        
}
function toFactorial(){
    let num = Number(display.value);
    if (isNaN(num) || display.value.includes("+") || display.value.includes("-") || display.value.includes("x") || display.value.includes("÷")) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1000);
        return;
    }
    if (num < 0) {
        display.value = "Error"; 
        setTimeout(() => display.value = "", 1000);
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i; 
    }
    display.value = fact;
}
function even_odd(){
     let num = Number(display.value);
     if (isNaN(num) || display.value.includes("+") || display.value.includes("-") || display.value.includes("x") || display.value.includes("÷")) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1000);
        return;
    }
     if(num % 2 == 0){
        display.value = "Even";
        setTimeout(() => display.value = "", 2000);
     }
     else{
        display.value = "Odd";
        setTimeout(() => display.value = "", 2000);
     }
}
function calc() {
    let expre = display.value;
    let num = "";
    let result = 0;
    let operator = "+";

    for (let i = 0; i < expre.length; i++) {
        let ch = expre[i];

        if (/[0-9]/.test(ch) || ch === ".") {
            num += ch;
        }
        else {
            let n = Number(num);
            if (operator === "+") {
                result = result + n;
            }
            else if (operator === "-") {
                result = result - n;
            }
            else if (operator === "x") {
                result = result * n;
            }
            else if (operator === "÷") {
                result = result / n;
            }
            else if (operator === "%") {
                result = result % n;
            }
            operator = ch;
            num = "";
        }
    }
    if (num !== "") {
        let n = Number(num);
        if (operator === "+") {
            result = result + n;
        }
        else if (operator === "-") {
            result = result - n;
        }
        else if (operator === "x") {
            result = result * n;
        }
        else if (operator === "÷") {
            if (n === 0) {
                display.value = "Error";
                setTimeout(() => display.value = "", 1000);
                return;
            }
            result = result / n;
        }
        else if (operator === "%") {
            if (n === 0) {
                display.value = "Error";
                setTimeout(() => display.value = "", 1000);
                return;
            }
            result = result % n;
        }
    }
    display.value = result;

}