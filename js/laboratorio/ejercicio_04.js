//DECLARACION DE VARIABLES SOLICITANDO LOS DATOS AL USUSARIO
let edad = Number(prompt("Ingrese su edad:"));
let pais = prompt("Ingrese su país:");

if (edad >= 65 && pais.toLowerCase() === "peru") {
    console.log("Accede al bono");
} else {
    console.log("No accede al bono");
}