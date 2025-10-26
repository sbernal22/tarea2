function soloUnaVez(arr){
    let arregloUnaVez=[], contador=0;
    for(let i=0; i<arr.length; i++) {
        let cantidadRepeticion= 0;
        for(let j=0; j<arr.length; j++){
            if(arr[j]==arr[i]){
                cantidadRepeticion++;
            }
        }
        if(cantidadRepeticion==1){
            arregloUnaVez[contador]=arr[i];
            contador++;
        }
    }
    return arregloUnaVez;
}
console.log(soloUnaVez([1, 1, 2, 3, 3, 3, 3]));