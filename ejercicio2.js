const evaluarNumero= (numero)=>{
    if(numero>0){
        return "Positivo";
    }
    else if(numero<0){
        return "Negativo";
    }
    else{
        return "Cero";
    }
}
console.log(evaluarNumero(0));