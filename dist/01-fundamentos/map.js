// Inmutabilidad: Nunca modifica el array original; siempre devuelve uno nuevo.
// Misma Longitud: Si el array original tiene 5 elementos, el array resultante tendrá exactamente 5 elementos. No puedes usar .map() para filtrar o eliminar elementos.
// Procesamiento Individual: Pasa cada elemento del array por una función ejecutora (callback) que tú defines.
// Se usa cuando la transformación es directa y matemática (no requiere lógica compleja ni condiciones). Aprovecha el retorno implícito de las funciones de flecha (no necesitas escribir la palabra return).
const numeros = [1, 2, 3, 4];
const duplicados = numeros.map(num => num * 10);
console.log(duplicados);
// Se usa cuando necesitas hacer comprobaciones (if, switch) o cálculos de varias líneas antes de devolver el nuevo valor. Al abrir llaves { }, es obligatorio usar la palabra return.
const notas = [4, 7, 5, 9, 2];
const evaluaciones = notas.map(nota => {
    if (nota >= 5) {
        return `${nota} APROBADO`;
    }
    else {
        return `${nota} REPROBADO`;
    }
});
console.log(evaluaciones);
const usuarios = [
    { id: 1, nombre: "Ana", rol: "admin" },
    { id: 1, nombre: "Luis", rol: "user" }
];
const nombres = usuarios.map(u => u.nombre);
console.log(nombres);
const usuariosAnonimos = usuarios.map(u => (Object.assign(Object.assign({}, u), { nombre: "Anonimos" })));
console.log(usuariosAnonimos);
export {};
//# sourceMappingURL=map.js.map