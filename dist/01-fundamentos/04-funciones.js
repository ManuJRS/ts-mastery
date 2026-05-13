// Para definir una función robusta en TS, debemos atender a tres puntos clave:
// Tipado de Parámetros: Cada argumento debe tener su tipo.
// Tipado de Retorno: Qué devuelve la función (se coloca tras los paréntesis).
// Parámetros Opcionales o por Defecto: Usando ? o = respectivamente.
function saludar(nombre, momento = "buenos días") {
    return `¡Hola ${nombre}, ${momento}!`;
}
// arrow functions
const sumar = (a, b) => a + b;
// Ejercicio 1: El Calculador de IVA
// Crea una función llamada calcularTotal.
// Debe recibir un precio (número) y un impuesto (número).
// El impuesto debe ser opcional. Si no se envía, debe asumir que es el 21% (0.21).
// La función debe retornar un número.
const price = 200;
let tax = 20;
function totalCalculate(price, tax) {
    return price * tax;
}
totalCalculate(10, 10);
// --- Ejercicio 1 (referencia): impuesto opcional con valor por defecto 21 %
function calcularTotal(precio, impuesto = 0.21) {
    return precio * (1 + impuesto);
}
// Ejemplos: calcularTotal(100) → 121; calcularTotal(100, 0.1) → 110
console.log(calcularTotal(20));
// Crea una función de flecha llamada convertirTexto.
// Recibe un texto (string) y un modo (que solo puede ser 'mayuscula' o 'minuscula').
// Debe retornar el texto transformado.
// Reto: Intenta que el modo sea un Literal Type (como hicimos con el semáforo).
const convertirTexto = (texto, modo) => {
    if (modo === "mayuscula") {
        return texto.toUpperCase();
    }
    else {
        return texto.toLowerCase();
    }
};
console.log(convertirTexto("hola", "minuscula"));
console.log(convertirTexto("adios", "mayuscula"));
// Ejercicio 3: El Validador de Arrays
// Crea una función llamada ultimoElemento.
// Debe recibir un array de strings.
// Debe retornar el último elemento del array (un string).
// Pista: Ten cuidado con lo que devuelve si el array está vacío (TS podría avisarte de un posible undefined).
const ultimoElemento = (array) => {
    return (array[array.length - 1]);
};
const arraytest = ["a", "b", "c", "d"];
console.log(ultimoElemento(arraytest));
export {};
// =============================================================================
// REVISIÓN (tutor): consideraciones y puntos a mejorar por ejercicio
// =============================================================================
//
// --- Ejercicio 1 (IVA / totalCalculate + calcularTotal) ---
// - Nombres: el enunciado pedía "calcularTotal"; "totalCalculate" es válido para TS pero no sigue el enunciado ni el estilo en español del material.
// - Variables externas "price" y "tax": los parámetros del mismo nombre en totalCalculate las ensombrecen; quedan como ruido si no las usas fuera.
// - "tax: number | 0.21" no expresa "opcional con defecto 21 %": es una unión de tipos; "0.21" ya es un number, así que no modela "omitir argumento". Lo opcional + defecto se hace con "?" y/o valor por defecto "= 0.21" en la lista de parámetros.
// - Fórmula: "precio * impuesto" suele ser solo la cuota de IVA si impuesto es la tasa (0.21). "precio * (1 + impuesto)" es el total con IVA incluido (el 1 es el 100 % de la base). Alinea unidades (tasa 0–1 vs porcentaje 0–100) con lo que pida el enunciado.
// - Si siempre pasas dos argumentos en la llamada, no demuestras el caso "sin segundo argumento".
// - Dato pro: con "impuesto: number = 0.21" suele bastar; no hace falta "?" para poder omitir el segundo argumento en la llamada.
// - Trampa común: confundir unión "number | 0.21" con "valor por defecto"; la unión describe formas del valor, el defecto lo fija la firma (u otra lógica explícita).
//
// --- Ejercicio 2 (convertirTexto) ---
// - El literal union "mayuscula" | "minuscula" cumple el reto; el else queda bien cubierto por narrowing tras el "if (modo === 'mayuscula')".
// - Coherencia didáctica: arriba anotas retorno explícito (: string, : number); aquí podrías añadir ": string" a la flecha (TS ya lo infiere; el explícito documenta la API).
// - Estilo: unificar punto y coma con el resto del archivo.
// - Dato pro: un alias "type ModoTexto = 'mayuscula' | 'minuscula'" reutiliza y nombra el dominio como el "semáforo".
// - Trampa común: si añades un tercer literal al union y solo usas if/else, revisa todas las ramas; patrones con "default" a "never" ayudan a forzar exhaustividad.
// - Nota entorno: si "tsc" avisa por deprecación en tsconfig (p. ej. moduleResolution), eso es independiente de este ejercicio.
//
// --- Ejercicio 3 (ultimoElemento) ---
// - Trampa común: anotar el parámetro como "[]" (tupla vacía) no es "array de strings vacío o no": solo acepta la tupla de longitud 0; para "array de strings" usa "string[]" (como ahora).
// - Tensión enunciado: pide "un string" y la pista habla de undefined si el array está vacío; "string | undefined" es honesto ante el vacío (o garantizas string con valor por defecto / error explícito).
// - Con "noUncheckedIndexedAccess": true, muchas lecturas por índice devuelven "T | undefined"; encaja con la pista del ejercicio.
// - Dato pro: en parámetros, "readonly string[]" deja claro que no deberías mutar el array recibido.
//# sourceMappingURL=04-funciones.js.map