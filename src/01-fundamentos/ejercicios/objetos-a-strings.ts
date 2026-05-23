// Este es el uso más real de .map() en el desarrollo profesional: recibir una lista de objetos complejos desde una base de datos o API y extraer solo una propiedad específica.

// Definición de Tipos:

// Crea un tipo Estudiante con las propiedades: id (number), nombre (string), edad (number) y carrera (string).

// Datos de origen: Crea un array llamado listaEstudiantes que sea de tipo Estudiante[] con al menos 3 alumnos inventados.

// Tu Misión: Crea una función llamada obtenerNombresEstudiantes.

// Debe recibir el array de tipo Estudiante[].

// Debe usar .map() para "extraer" únicamente el nombre de cada estudiante.

// El Reto de TS: Piensa bien qué tipo de datos va a devolver esta función. Ya no devuelves objetos, ahora devuelves una lista de textos. Declara ese tipo de retorno correctamente.

type Estudiante = {
    id:number
    nombre:string
    edad:number
    carrera:string
}

const listaEstudiantes: Estudiante[] = [{id:2,nombre:"luis",edad:20,carrera:"admon"},{id:1,nombre:"pepe",edad:22,carrera:"conta"},{id:2,nombre:"pedro",edad:19,carrera:"inge"}]

const obtenerNombresEstudiantes = (array:Estudiante[]):string[] => {
    return array.map(nom => nom.nombre) 
}

console.log(obtenerNombresEstudiantes(listaEstudiantes))