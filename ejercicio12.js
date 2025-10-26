function valoresUnicos(arr1, arr2){
    arr1=new Set(arr1), arr2=new Set(arr2);
    const union = new Set([...arr1, ...arr2]);
    const interseccion = new Set([...arr1].filter(x => arr2.has(x)));
    const diferencia = new Set([...arr1].filter(x => !arr2.has(x)));
    let matriz=[...Array.from(union), ...Array.from(interseccion), ...Array.from(diferencia)];
    return matriz;
}
console.log(valoresUnicos([1, 2, 5, 3, 3, 4], [4, 4, 5, 5, 6, 9]));