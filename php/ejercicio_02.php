  <?php


$precios= [
       "Pantalones de Lana" => 45.00,
       "Sueter de casimir"  => 100.00,
       "Blusa de seda"      => 40.00,
       "Camisola de seda"   => 10.00,
       "Falda recta"        => 40.00,
       "Saco de lana"       => 120.00
];

$prenda = "Sueter de casimir";
$cantidad =8;

//ahora obtendremos el precio unitario
//desde el arreglo
$precioUnitario = $precios[$prenda];

//Realizamos el calculo
$montoVenta = $precioUnitario * $cantidad;

//Determinamos el porcentaje de descuento
if ($montoVenta < 100){
    $porcentajeDescuento = 0.02;
}elseif($montoVenta <= 500){
    $porcentajeDescuento = 0.04;
}elseif($montoVenta <= 1000){
    $porcentajeDescuento = 0.06;
}elseif($montoVenta <= 1500){
    $porcentajeDescuento = 0.08;
}else{
    $porcentajeDescuento = 0.20;
}
//calculamos el monto de descuento
$montoDescuento = $montoVenta * $porcentajeDescuento;

//calculamos el monto neto a pagar
$montoNeto = $montoVenta - $montoDescuento;

//calculamos el IGV
$tasaIGV = 0.18;
$montoIGV =  $montoVenta * $tasaIGV;

// Fase de salida: Imprimimos TODO

echo ":::::::::DETALLE DE COMPRA: TELAS Y MODA DE OTOÑO ISABEL :::::::" . "<br>";
echo "---------------------------------------------------------------" .  "<br>";
echo"Prenda seleccionada: " . $prenda . "<br>";
echo"Cantidad: " . $cantidad . "<br>";
echo"Cantidad: " . $cantidad . "<br>";
echo"-----------------------------------------------------------------" .  "<br>";
echo"Precio unitario " . $precioUnitario . "<br>";
echo"Descuento: " . $porcentajeDescuento . "<br>";
echo"IGV: " . $montoIGV . "<br>";
echo "Monto neto a pagar: " . $montoNeto . "<br>";
echo"------------------------------------------------------------------" .  "<br>";