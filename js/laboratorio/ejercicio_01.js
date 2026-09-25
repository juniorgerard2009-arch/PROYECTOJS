


let edad  = parseInt(prompt("Ingrese su edad: "));

if (edad <= 10){
    console.log("Entrada gratuita.");
}else if (edad <= 14){
    console.log("Precio de entrada: S/ 8.00 (adolescente)");
}else if (edad <= 60){
    console.log("Precio de entrada: S/ 20.00 (adulto) ");
}else{
    console.log("Precio de entrada: S/ 7.00 (adulto mayor)");
}
