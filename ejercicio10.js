function paresCuadrado(numeros){
    let paresC=[];
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2==0){
            paresC.push(numeros[i]*numeros[i]);
        }
    }
    return paresC;
}
console.log(paresCuadrado([1, 2, 3, 4, 5, 6, 9]));