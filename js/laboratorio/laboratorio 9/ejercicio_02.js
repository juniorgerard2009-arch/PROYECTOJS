const tablaMultiplicar = 9;
const limite = 12;

console.log(`::::::: TABLA DE MULTIPLICAR DEL ${tablaMultiplicar}:::::::`)

for (let i = 1; i <= limite; i++){
    let resultado = tablaMultiplicar * i;

    console.log(`${tablaMultiplicar} x ${i} = ${resultado}`);
}