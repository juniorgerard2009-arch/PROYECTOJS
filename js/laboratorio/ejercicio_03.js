//VALIDACION DE LOGIN (USUARIO Y CONTRASEÑA)
let usuario = prompt("Usuario: ");
let password = prompt("contraseña: ");

if (usuario = "admin" &&  password == "123"){
    console.log("Acceso concedido. ¡Bienvenido!")
}else{
    console.log("usuario y/o Password incorrecto.");
}