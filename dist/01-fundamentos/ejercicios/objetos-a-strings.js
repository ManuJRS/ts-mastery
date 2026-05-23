// Este es el uso más real de .map() en el desarrollo profesional: recibir una lista de objetos complejos desde una base de datos o API y extraer solo una propiedad específica.
const listaEstudiantes = [{ id: 2, nombre: "luis", edad: 20, carrera: "admon" }, { id: 1, nombre: "pepe", edad: 22, carrera: "conta" }, { id: 2, nombre: "pedro", edad: 19, carrera: "inge" }];
const obtenerNombresEstudiantes = (array) => {
    return array.map(nom => nom.nombre);
};
console.log(obtenerNombresEstudiantes(listaEstudiantes));
export {};
//# sourceMappingURL=objetos-a-strings.js.map