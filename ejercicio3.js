const operar= (num1, num2, operacion)=>{
    return operacion(num1, num2);
}
function sumar(num1, num2) {
    return num1+num2;
}
function restar(num1, num2) {
    return num1-num2;
}
function multiplicar(num1, num2) {
    return num1*num2;
}
function dividir(num1, num2) {
    if (num2 ==0) {
        return "Error";
    }
    return num1/num2;
}
function potencia(num1, num2) {
    return num1**num2;
}
function modulo(num1, num2) {
    if (num2== 0) {
        return "Error";
    }
    return num1%num2;
}
console.log(operar(2, 3, potencia));