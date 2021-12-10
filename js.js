

const oEmpleado ={
    bruto:20000,
    hijos:0,
    pagas:14,
}



if(oEmpleado.bruto < 12000){
    Reduccion= 0;
} else if(oEmpleado.bruto < 24000){
    Reduccion = 0.08;
}else if(oEmpleado.bruto < 34000){
    Reduccion = 0.16;
}else{
    Reduccion = 0.30;
}

if(oEmpleado.hijos>0){
    Reduccion = Reduccion - (0.02*oEmpleado.hijos);
}


NetoT = oEmpleado.bruto - oEmpleado.bruto* Reduccion;
NetoM = NetoT / oEmpleado.pagas;


console.log("Sueldo neto anual", NetoT.toFixed(2), "€");
console.log("Sueldo neto mensual", NetoM.toFixed(2), "€");