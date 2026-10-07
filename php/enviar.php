<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir y limpiar los datos del formulario
    $nombre = strip_tags(trim($_POST['nombre'] ?? ''));
    $apellido = strip_tags(trim($_POST['apellido'] ?? ''));
    $correo = filter_var(trim($_POST['correo'] ?? ''), FILTER_SANITIZE_EMAIL);
    
    // Unir las partes del teléfono
    $tel1 = trim($_POST['tel1'] ?? '');
    $tel2 = trim($_POST['tel2'] ?? '');
    $tel3 = trim($_POST['tel3'] ?? '');
    $telefono = !empty($tel1) ? "$tel1-$tel2-$tel3" : "No proporcionado";
    
    $asunto_opcion = trim($_POST['asunto'] ?? 'Otro');
    $mensaje_usuario = htmlspecialchars(trim($_POST['mensaje'] ?? ''));

    // Configuración del destinatario (cambia este correo por el tuyo)
    $destinatario = "juniorgerard2009@gmail.com";
    $asunto_correo = "Nuevo mensaje de contacto: " . $asunto_opcion;

    // Construir el cuerpo del mensaje
    $cuerpo = "Has recibido un nuevo mensaje desde el formulario:\n\n";
    $cuerpo .= "Nombre: $nombre $apellido\n";
    $cuerpo .= "Correo electrónico: $correo\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Asunto: $asunto_opcion\n\n";
    $cuerpo .= "Mensaje:\n$mensaje_usuario\n";

    // Cabeceras del correo
    $cabeceras = "From: no-reply@tu-dominio.com\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    // Intentar enviar el correo
    if (mail($destinatario, $asunto_correo, $cuerpo, $cabeceras)) {
        // Respuesta exitosa
        echo "success";
    } else {
        // Error al enviar
        echo "error";
    }
} else {
    // Si intentan entrar al archivo PHP directamente por la URL
    header("HTTP/1.0 403 Forbidden");
    echo "Acceso denegado.";
}
?>
