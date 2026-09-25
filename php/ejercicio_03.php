<?php

$licencias = 42;
$precio = 120;

$compra = $licencias * $precio;

if ($compra > 5000) {
    $flete = 0;
} else {
    $flete = 150;
}

$total = $compra + $flete;

echo "La cantidad de licencias es: " . $licencias;
echo "<br>";
echo "El precio por licencia es: S/ " . $precio;
echo "<br>";
echo "El costo de la compra es: S/ " . $compra;
echo "<br>";
echo "El costo del flete es: S/ " . $flete;
echo "<br>";
echo "El total a pagar es: S/ " . $total;

?>

