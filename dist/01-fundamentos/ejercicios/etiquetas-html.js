// Aquí practicarás cómo transformar strings planos en estructuras de texto formateadas (muy común cuando trabajas con renderizado en frameworks).
// Datos de origen: Crea un array llamado lenguajes con valores: ['TypeScript', 'JavaScript', 'Python', 'Go'].
// Tu Misión: Crea una función llamada convertirALi.
// Debe recibir un array de strings.
// Debe usar .map() para envolver cada lenguaje en una etiqueta HTML . Por ejemplo, 'TypeScript' debe convertirse en 'TypeScript'.
// La función debe retornar el nuevo array de strings.
const lenguajes = ['TypeScript', 'JavaScript', 'Python', 'Go'];
const convertirALi = (arrays) => {
    return arrays.map(array => `<li>${array}</li>`);
};
const resultadoArray = convertirALi(lenguajes);
console.log(resultadoArray);
export {};
//# sourceMappingURL=etiquetas-html.js.map