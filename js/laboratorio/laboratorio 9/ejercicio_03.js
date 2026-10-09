const pinCorrecto = "1234";

const intentos = ["4587", "4589", "7358"];
let intentosRealizados = 0;
const maxIntentos = 3;
let accesoConcedido = false;

do{
    let pinIngresado = intentos[intentosRealizados];
    intentosRealizados++;

    console.log(`Intento ${intentosRealizados}: Ingresando PIN...)`)
    if(pinIngresado === pinCorrecto){
        console.log("PIN ACEPTADO. BIENVENIDOS AL SISTEMA");
        accesoConcedido = true;
    }else{
    console.log("PIN INCORRECTO.");
    }
}while(!accesoConcedido && intentosRealizados < maxIntentos);

if(!accesoConcedido){
    console.log("¡¡¡TARJETA BLOQUEADA!!!");
}