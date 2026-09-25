<?php
//let producto = "Zapatillas Adidas";


$producto = "zapatillas Adidas";

$precio = 350;
$descuento = 0.08;
$igv = 0.18;


$precioIGV = $precio * $igv;
$precioDescuento = $precio + $precioIGV - $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;



echo "El precio del producto es: S/ " . $precio;
echo "El IGV es: S/ " . $precioIGV;
echo "El descuento es: S/ " . $precioDescuento;
echo "El precio final es: S/ " . $precioFinal;
?>