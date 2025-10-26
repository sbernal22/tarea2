function arrayMultiplos(numeros, elem){
    let cantMultiplos=0;
    for(const numero of numeros){
        if(numero%elem==0){
            cantMultiplos++;
        }
    }
    return cantMultiplos;
}
console.log(arrayMultiplos([1, 2, 3, 4, 5, 6, 9], 3));