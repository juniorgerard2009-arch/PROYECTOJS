let nombreObrero = prompt("Ingrese el nombre del obrero:");
let cantidadPrendas = parseFloat(prompt("Ingrese la cantidad de prendas confeccionadas:"));

if (isNaN(cantidadPrendas)  || cantidadPrendas <0) {
    console.log("Por favor, ingrese una cantidad valida de prendas.");
}else {

    const TARIFA_POR_PRENDAS = 10;
    const sueldoBruto = cantidadPrendas * TARIFA_POR_PRENDAS;


    const impuestos = sueldoBruto * 0.03;      //3%
    const seguro = sueldoBruto * 0.02;         //2%
    const solidaridad = sueldoBruto * 0.01;    //1%
    const bonificacion = sueldoBruto * 0.05;   //5%


    const sueldoNeto= sueldoBruto - impuestos - seguro - solidaridad + bonificacion;


    console.log("👷Nombre del obrero: " + nombreObrero);
    console.log("💵Sueldo bruto: S/ " + sueldoBruto);
    console.log("💵Impuestos: S/ " + impuestos);
    console.log("🔒Seguro: S/ " + seguro);
    console.log("🫂Solidaridad: S/ " + solidaridad);
    console.log("💵Bonificacion: S/ " + bonificacion);
    console.log("💵Sueldo neto: S/ " + sueldoNeto);
}
