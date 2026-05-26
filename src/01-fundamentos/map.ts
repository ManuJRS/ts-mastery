// Inmutabilidad: Nunca modifica el array original; siempre devuelve uno nuevo.

// Misma Longitud: Si el array original tiene 5 elementos, el array resultante tendrá exactamente 5 elementos. No puedes usar .map() para filtrar o eliminar elementos.

// Procesamiento Individual: Pasa cada elemento del array por una función ejecutora (callback) que tú defines.


// Se usa cuando la transformación es directa y matemática (no requiere lógica compleja ni condiciones). Aprovecha el retorno implícito de las funciones de flecha (no necesitas escribir la palabra return).
const numeros: number[] = [1,2,3,4];
const duplicados: number[] = numeros.map(num => num *10)
console.log(duplicados)

// Se usa cuando necesitas hacer comprobaciones (if, switch) o cálculos de varias líneas antes de devolver el nuevo valor. Al abrir llaves { }, es obligatorio usar la palabra return.

const notas: number[] = [4,7,5,9,2]

const evaluaciones: string[] = notas.map(nota => {
    if(nota >= 5) {
        return `${nota} APROBADO`
    } else {
        return `${nota} REPROBADO`
    }
});
console.log(evaluaciones)

// Es el escenario más común en desarrollo real. Modificas la estructura de un objeto o extraes datos específicos.

// ⚠️ Regla Crítica de TS: Cuando devuelves un objeto directamente en una sola línea con una función de flecha, debes envolver el objeto entre paréntesis ({ }). Si no lo haces, TypeScript pensará que las llaves son el cuerpo de la función y fallará.

interface Usuario {
    id:number;
    nombre: string;
    rol:string
}

const usuarios: Usuario[] = [
    {id:1, nombre:"Ana", rol:"admin"},
    {id:1, nombre:"Luis", rol:"user"}
];

const nombres: string[] = usuarios.map(u=> u.nombre)
console.log(nombres)

const usuariosAnonimos = usuarios.map(u => ({
    ...u,
    nombre:"Anonimos"
}))

console.log(usuariosAnonimos)