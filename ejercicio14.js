function diferenciaSimetrica(arr1, arr2){
    const setArr1=new Set(arr1);
    const setArr2=new Set(arr2);
    const soloEnA=[...setArr1].filter(x => !setArr2.has(x));
    const soloEnB=[...setArr2].filter(x => !setArr1.has(x));
    return [...soloEnA, ...soloEnB];
}
console.log(diferenciaSimetrica([1, 2, 3, 3, 4], [2, 3, 6, 7, 8, 8]));