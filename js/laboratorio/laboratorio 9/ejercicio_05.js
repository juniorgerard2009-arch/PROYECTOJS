// Simulación de los precios que va escaneando el cajero (el último es 0)
const ingresosCajero = [45.50, 12.00, 120.00, 0]; 

let totalPOS = 0;
let contadorProductos = 0;
let indice = 0;

console.log("--- Sistema POS Iniciado ---");

// Estructura do-while para asegurar que escanee al menos una vez
do {
    let precioEscaneado = ingresosCajero[indice];
    
    if (precioEscaneado === 0) {
        console.log("Se presionó el botón 'Finalizar Compra' (Precio 0).");
        break; 
    }
    
    totalPOS += precioEscaneado;
    contadorProductos++;
    console.log(`Producto ${contadorProductos} escaneado: S/ ${precioEscaneado.toFixed(2)}`);
    
    indice++;
} while (indice < ingresosCajero.length);

console.log(`\nCantidad de productos: ${contadorProductos}`);
console.log(`Total acumulado de la venta: S/ ${totalPOS.toFixed(2)}`);
