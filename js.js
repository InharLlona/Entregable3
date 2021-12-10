

const oProduct ={
    cantidad:3,
    precio:12.5,
    tipo:"comida",
}

function Price(Objectp){
    if(Objectp.tipo == "comida" ){
        IVA= 0.1;
    } else if(Objectp.tipo == "libro"){
        IVA = 0.04;
    }else{
        IVA = 0.21;
    }
    result= Objectp.precio * IVA + Objectp.precio;
    return result;
}

var Total = (oProduct.cantidad > 0) ? oProduct.cantidad * Price(oProduct):0;
if (oProduct.cantidad<0){
    console.log("La cantidad debe ser positiva");
}else{
console.log("Cuando computamos el IVA, el producto pasa a valer", Price(oProduct),"€");
console.log("Debe usted abonar la cantidad de ", Total,"€");
}
