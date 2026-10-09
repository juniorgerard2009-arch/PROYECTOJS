//1. Primero, vamos a crear un arreglo
//con los sueldos de los colaboradores

const sueldoColaboradores = [
    2500, 1300, 4800, 5300, 1200, 5800, 1380, 6899,4578,5487
];
const porcentajeAguinaldo = 0.20;

for (let i = 0; i < sueldoColaboradores.length; i++){
    let sueldoBase = sueldoColaboradores[i];
    let aguinaldo = sueldoBase * porcentajeAguinaldo;
    let totalPagar = sueldoBase + aguinaldo;

    console.log("sueldo Base: " , sueldoBase);
    console.log