// --- TEORÍA RÁPIDA ---
// TypeScript detecta errores antes de ejecutar el código.
// Si intentas asignar un número a un string, el editor te avisará.
let nombre = "Tu Nombre";
let edad = 25;
let esEstudiante = true;
// EJERCICIO 1: 
// Crea una constante llamada 'puntos' que solo acepte números.
// Crea una variable 'estado' que pueda ser string O null (Usa el pipe | para unir tipos).
const points = 20;
let status = "activo";
export {};
// --- REVISIÓN (tutor) ---
// Tipos: lo anotado es correcto con strict: true; no hay any.
// Enunciado pedía nombres 'puntos' y 'estado'; usar points/status es válido para TS, pero no coincide con los nombres del ejercicio ni con el estilo en español del resto del archivo.
// Estilo: en las líneas de arriba se usaba ';'; aquí se unificó con ';' al final de cada sentencia (ASI también cubriría este caso).
// Dato pro: string | null deja explícito que a veces el valor es null; con solo string, strictNullChecks (dentro de strict) impediría asignar null después.
// Trampa común: const x: number = 20 anota el tipo ancho number; sin anotación o con patrones como as const, TS puede refinar a literales u otros tipos más finos.
//# sourceMappingURL=tipos-basicos.js.map