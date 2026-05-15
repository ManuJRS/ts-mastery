// En TS, también podemos definir qué "forma" debe tener una función.
// Crea un tipo (type) llamado Operacion. Este tipo debe describir una función que recibe dos números y devuelve un número.
// Crea dos constantes: sumar y restar, y asígnales el tipo Operacion.
// Crea una función llamada ejecutarCalculo que reciba: a (number), b (number) y una accion (de tipo Operacion).
// Prueba: Llama a ejecutarCalculo(5, 10, sumar).
const sumar = (a, b) => {
    return a + b;
};
const restar = (a, b) => {
    return a - b;
};
const ejecutarCalculo = (x, y, calculo) => {
    return calculo(x, y);
};
console.log(ejecutarCalculo(5, 5, restar));
export {};
//# sourceMappingURL=operacion.js.map