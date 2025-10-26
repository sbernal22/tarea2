function arrayInverso(numeros){
    let n=numeros.length, inverso=new Array(n);
    for(let i=0; i<n; i++){
        inverso[i]=numeros[n-i-1];
    }
    return inverso;
}
console.log(arrayInverso([1, 2, 3, 4, 5]));