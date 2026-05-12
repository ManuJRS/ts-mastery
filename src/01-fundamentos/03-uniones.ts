// 1. Union Type
// Declara una variable 'identificador' que pueda ser string O number.
let identificador: string | number;
identificador = 101;    // OK
identificador = "A-15"; // OK



// 2. Literal Type + Union
// Imagina un semáforo. Solo puede ser 'rojo', 'amarillo' o 'verde'.
type ColorSemaforo = "rojo" | "amarillo" | "verde";
let luz: ColorSemaforo = "rojo";

// --- DESAFÍO ---
// 1. Intenta asignar luz = "azul"; y observa cómo Cursor se queja.
// 2. Crea una función llamada 'ajustarVolumen'.
//    Debe recibir un parámetro llamado 'nivel'.
//    El nivel solo puede ser: 0, 10, 20 o 30.
//    Si intentas pasarle un 15, debe dar error de compilación.

// luz = "azul"

function ajustarVolumen(nivel: 0 | 10 | 20 | 30) {
    console.log(`Ajustando volumen a ${nivel}`);
}

// ajustarVolumen(11)

// Llama a la función con un valor válido y uno inválido para probar.