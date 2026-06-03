// Ejercicio 3 (Sencillo): El Generador de Slugs (URLs)
//
// Contexto: Un array de títulos de artículos: ["Curso de TS", "Aprende Map", "Estructura de Datos"].
//
// Misión: Usa .map() para convertir cada título a minúsculas y reemplazar los espacios
// por guiones medios (puedes usar .replace(/ /g, "-")). Ejemplo: "curso-de-ts".

const titulos = ["Curso de TS", "Aprende Map", "Estructura de Datos"];

const formater = (text:string[]):string[] => {
     return text.map(texto => texto.toLocaleLowerCase().replace(/\s+/g, '-'))
}

console.log(formater(titulos))


