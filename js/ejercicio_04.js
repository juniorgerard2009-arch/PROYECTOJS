let empleado = prompt("Ingrese el nombre del empleado:");
let horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas:"));
let tarifaHora = parseFloat(prompt("Ingrese la tarifa por hora:"));


let salarioBruto = horasTrabajadas * tarifaHora;
let impuestoBoleta = salarioBruto * 0.10; // 10% de impuesto
let salarioNeto = salarioBruto - impuestoBoleta;


console.log("🎫Boleta De Pago");
console.log("🙋Empleado: ${empleado}");
console.log("⏰Horas Trabajadas: ${horasTrabajadas}");
console.log("💵Tarifa por Hora: S/ ${tarifaHora.toFixed(2)}");
console.log("💵Salario Bruto: S/ ${salarioBruto.toFixed(2)}");
console.log("💵Impuestos (10%): S/ ${impuestoBoleta.toFixed(2)}");
console.log("💵Salario Neto: S/ ${salarioNeto.toFixed(2)}");