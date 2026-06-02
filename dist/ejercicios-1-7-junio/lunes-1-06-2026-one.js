// Ejercicio 1 (Sencillo): El Multiplicador Posicional
//
// Contexto: Tienes un array de números: [10, 20, 30, 40].
//
// Misión: Usa .map() aprovechando su segundo parámetro (el índice) para multiplicar
// cada número por su posición en el array. El resultado esperado es [0, 20, 60, 120].
const numeros = [10, 20, 30, 40];
const multiplicar = (num) => {
    return num.map((num, index) => num * index);
};
console.log(multiplicar(numeros));
export {};
//# sourceMappingURL=lunes-1-06-2026-one.js.map