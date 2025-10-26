function valoresUnicos(numeros){
    return new Set(numeros).size;
}
console.log(valoresUnicos([1, 2, 3, 3, 4, 4, 4, 5, 5, 6, 9]));