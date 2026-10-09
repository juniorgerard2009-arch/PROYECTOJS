let deuda = 4500.00;
let pagoMensual = 500.00;
let mesesTranscurridos= 1;

console.log("::::::CRONOGRAMA DE PAGOS::::::")

while (deuda > 0){

   if(deuda > 0){
      deuda -= pagoMensual;
      console.log(`mes ${mesesTranscurridos}: ${pagoMensual.toFixed(2)}. saldo restante:S/ ${deuda.toFixed(2)}`);
      mesesTranscurridos++;
  } else {
      console.log(`mes ${mesesTranscurridos}: pago final de S/ ${deuda.toFixed(2)}.saldo restante: S/ 0.00`);
      deuda = 0;
  }
}

console.log("Deuda liquidada en su totalidad.");