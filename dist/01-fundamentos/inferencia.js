// --- TEORÍA: INFERENCIA ---
// Si inicializas una variable, TS "deduce" el tipo.
let mensaje = "Hola Mundo"; // TS sabe que es string.
// EJERCICIO 2:
// 1. Declara una variable 'cuenta' e inicialízala con un número.
// 2. En la siguiente línea, intenta asignarle un string. 
// 3. Observa el error que marca Cursor (subrayado rojo).
// 4. EL DESAFÍO:
// Crea un array de nombres. Únicamente usando inferencia (sin poner :string[]), 
// intenta agregar un número al array usando .push().
// ¿Qué error te da? Escribe la respuesta como un comentario en el código.
let count = 20;
// count = "pepe" //el tipo string no es asignable al tipo number
let colection = ["pedro", "pablo", "pepe"];
export {};
// colection.push(21) //el error dice "el argumento tipo number no es asignable al parametro tipo string"
// --- REVISIÓN (tutor) ---
// Línea count = "pepe": una vez el identificador es number (por anotación o por inferencia desde 20), asignar string viola asignabilidad: string no es asignable a number bajo strict.
// El ejercicio pedía el nombre 'cuenta'; count es equivalente para el compilador, pero no sigue el enunciado al pie de la letra.
// Array: con solo strings en el literal, TS infiere string[]; entonces push espera string y push(21) falla (argumento number no asignable al parámetro string).
// colection: probable typo; en español suele ser coleccion (o el nombre que pida el material).
// Si descomentas las líneas que provocan error, npx tsc --noEmit falla en todo el proyecto; para mantener el repo compilando: comentar, @ts-expect-error con motivo, o mover el experimento a otro archivo.
// Estilo: conviene unificar punto y coma en todo el archivo.
// Dato pro: si el array debe admitir varios tipos, el tipo del elemento debe reflejarlo (p. ej. unión); sin eso, la inferencia a partir de solo strings te deja un string[] cerrado a strings.
// Trampa común: const a = [] sin contexto puede inferirse como never[] en TS reciente; mezclar tipos en el literal (p. ej. string y number) cambia el tipo inferido del array.
//# sourceMappingURL=inferencia.js.map