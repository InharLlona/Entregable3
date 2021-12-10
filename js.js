

const oProduct ={
    cantidad:3,
    precio:12.5,
    tipo:"libro",
}

if(oProduct.tipo == "comida" ){
    IVA= 0.1;
} else if(oProduct.tipo == "libro"){
    IVA = 0.04;
}else{
    IVA = 0.21;
}

TotalSin = oProduct.cantidad * oProduct.precio;
IvaT = (oProduct.precio * IVA) * oProduct.cantidad;
TotalCon = TotalSin + IvaT;
if(oProduct.cantidad > 0){
console.log("El precio sin IVA es de ", TotalSin.toFixed(2), "€");
console.log("El IVA aplicable a su producto es del ", IVA * 100,"% por lo que el IVA es ",IvaT.toFixed(2),"€");
console.log("Total a pagar ", TotalCon.toFixed(2),"€");
}else{
    console.log("La cantidad no debe ser negativa");
}