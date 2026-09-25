
let persona = prompt("¿Eres estudiante o instructor?");
let descuento;

if (persona == "estudiante") {
    descuento = 15;
    console.log("acccede al 15%");
} else {
    descuento = 0;
    console.log("accede al 0%");
}
