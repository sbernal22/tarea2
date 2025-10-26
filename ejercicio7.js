function mayorMenor(numeros){
    let mayor=numeros[0], menor=numeros[0];
    for(const numero of numeros){
        if(numero>mayor)
            mayor=numero;
        if(numero<menor)
            menor=numero;
    }
    return [menor, mayor];
}
console.log(mayorMenor([1, -2, 3]));