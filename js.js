

const oEmpleado ={
    bruto:20000,
    hijos:0,
    pagas:14,
}

if(oEmpleado.bruto < 12450){
    Reduccion= 0.19;
} else if(oEmpleado.bruto < 22200){
    Reduccion = 0.24;
}else if(oEmpleado.bruto < 35200){
    Reduccion = 0.30;
}else if(oEmpleado.bruto < 60000){
    Reduccion = 0.37;
}else if(oEmpleado.bruto < 300000){
    Reduccion = 0.45;
}else {
    Reduccion = 0.47;
}

if(oEmpleado.hijos>0){
    Reduccion = Reduccion - (0.02*oEmpleado.hijos);
}

NetoT = oEmpleado.bruto - oEmpleado.bruto* Reduccion;
NetoM = NetoT / oEmpleado.pagas;

console.log("Sueldo neto anual", NetoT.toFixed(2), "€");
console.log("Sueldo neto mensual", NetoM.toFixed(2), "€");