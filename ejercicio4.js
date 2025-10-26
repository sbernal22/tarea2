const calcularTotal= (precio1, precio2, callback)=>{
    callback(precio1, precio2);
}
function total(precio1, precio2){
    console.log(precio1+precio2);
}
calcularTotal(15, 20, total);