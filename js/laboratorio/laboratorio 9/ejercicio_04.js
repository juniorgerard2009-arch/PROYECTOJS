// Simulación de un carrito de compras con un arreglo de objetos (artículos)
const carrito = [
    { nombre: "Pantalón", precioUnitario: 120 },
    { nombre: "Medias", precioUnitario: 15 },
    { nombre: "Zapatillas", precioUnitario: 250 },
    { nombre: "Polera", precioUnitario: 85 }
];

let totalAPagar = 0;

console.log("--- Procesando Carrito de Compras ---");
carrito.forEach(articulo => {
    let precioFinalArticulo = articulo.precioUnitario;
    
    // Aplica 15% de descuento solo si supera los S/ 100
    if (articulo.precioUnitario > 100) {
        const descuento = articulo.precioUnitario * 0.15;
        precioFinalArticulo = articulo.precioUnitario - descuento;
        console.log(`${articulo.nombre}: S/ ${articulo.precioUnitario} -> Tiene descuento del 15%. Total artículo: S/ ${precioFinalArticulo.toFixed(2)}`);
    } else {
        console.log(`${articulo.nombre}: S/ ${articulo.precioUnitario} -> Sin descuento. Total artículo: S/ ${precioFinalArticulo.toFixed(2)}`);
    }
    
    totalAPagar += precioFinalArticulo;
});

console.log(`\nTotal final a pagar por todo el carrito: S/ ${totalAPagar.toFixed(2)}`);
