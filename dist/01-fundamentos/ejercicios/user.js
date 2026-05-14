// Ejercicio 7: El Buscador de Usuarios (Uniones y Undefined)
// Este es clave para entender cómo TS maneja la ausencia de datos.
// Crea un array de strings llamado usuarios con varios nombres.
// Crea una función buscarUsuario que reciba un nombre (string).
// La función debe buscar el nombre en el array.
// Retorno: Si lo encuentra, devuelve el nombre (string). Si no lo encuentra, debe devolver undefined.
// Reto: Al llamar a la función, guarda el resultado en una variable e intenta usar el método .toUpperCase() sobre esa variable. TS debería darte un error porque "el objeto es posiblemente undefined". ¿Cómo lo solucionarías con un if?
const usuarios = ["pepe", "luuis", "jose", "carlitos"];
// const buscarUsuario = (nombre: string): string | undefined => {
//   for (let i = 0; i < usuarios.length; i++) {
//     if (nombre === usuarios[i]) {
//       return nombre.toUpperCase();
//     }
//   }
//   return undefined;
// };
// const resultado = buscarUsuario("jose");
// console.log(resultado);
// Reto: sin estrechar, resultado.toUpperCase() daría error (posiblemente undefined).
// if (resultado !== undefined) {
//   console.log(resultado.toUpperCase());
// }
const buscarUsuario = (nombre) => {
    for (let i = 0; i < usuarios.length; i++) {
        if (nombre === usuarios[i]) {
            return nombre.toUpperCase();
        }
    }
    return undefined;
};
const resultado = buscarUsuario("jose");
console.log(resultado);
export {};
// if (resultado !== undefined) {
//     console.log(resultado)
// }
//# sourceMappingURL=user.js.map