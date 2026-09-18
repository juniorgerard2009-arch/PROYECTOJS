let kmRecorridos = parseFloat(prompt("Ingrese la cantidad de kilometros recorridos:"));
let litrosConsumidos = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));


let consumoPorkm = litrosConsumidos / kmRecorridos;


console.log("📖Reporte de Consumo");
console.log("🏃‍♀️‍➡️Kilometros recorridos: ${kmRecorridos} km");
console.log("⛽Combustible consumido: ${litrosConsumidos} L");
console.log("💵Consumo promedio: ${consumoPorkm.toFixed(3)} litros por kilometro");