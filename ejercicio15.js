function esSubconjunto(conjunto, subconjunto){
    let esSubconjunto=true;
    for(let elemSubconj of subconjunto){
        let existeEnConj=false;
        for(let elemConj of conjunto){
            if(elemSubconj==elemConj){
                existeEnConj=true;
            }
        }
        if(!existeEnConj){
            esSubconjunto=false;
            break;
        }
    }
    return esSubconjunto;
}
console.log(esSubconjunto([1, 2, 3, 3, 4], [1, 2, 2, 4]));