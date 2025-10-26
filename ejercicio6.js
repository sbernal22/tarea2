function sumaArreglo(numeros){
    let suma=0;
    for(const numero of numeros){
        if(numero>0)
            suma+=numero;
    }
    return suma;
}
console.log(sumaArreglo([1, -2, 3]));