"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Union Type
// Declara una variable 'identificador' que pueda ser string O number.
let identificador;
identificador = 101; // OK
identificador = "A-15"; // OK
let luz = "rojo";
// --- DESAFÍO ---
// 1. Intenta asignar luz = "azul"; y observa cómo Cursor se queja.
// 2. Crea una función llamada 'ajustarVolumen'.
//    Debe recibir un parámetro llamado 'nivel'.
//    El nivel solo puede ser: 0, 10, 20 o 30.
//    Si intentas pasarle un 15, debe dar error de compilación.
// luz = "azul"
function ajustarVolumen(nivel) {
    console.log(`Ajustando volumen a ${nivel}`);
}
// ajustarVolumen(11)
// Llama a la función con un valor válido y uno inválido para probar.
//# sourceMappingURL=03-uniones.js.map