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
            else if (operator === "*") {
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
    if (num !== null) {
        let n = Number(num);
        if (operator === "+") {
            result = result + n;
        }
        else if (operator === "-") {
            result = result - n;
        }
        else if (operator === "*") {
            result = result * n;
        }
        else if (operator === "÷") {
            result = result / n;
        }
        else if (operator === "%") {
            result = result % n;
        }
    }
    display.value = result;

}