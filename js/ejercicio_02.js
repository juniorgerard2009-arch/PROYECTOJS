let nombreProducto = "Mouse Optico";
let precioProducto=100;

const porcentajeDescuento = 0.08;
const porcentajeIgv = 0.18;

let descuento = precioProducto * porcentajeDescuento;
let subTotal = precioProducto - descuento;
let montoIgv= subTotal * porcentajeIgv;
let totalPagar = subTotal + montoIgv;

console.log("🛒producto: ", nombreProducto);
console.log("💵precio base: ", precioProducto);
console.log("💵Descuento (8%) S/ : ", descuento);
console.log("💵subTotal S/ : ", subTotal);
console.log("💵Igv (18%) S/ : ", montoIgv);
console.log("💵Total a pagar S/ : ", totalPagar);