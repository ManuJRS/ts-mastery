// Ejercicio 10: El Procesador de Respuestas de API (Tipado de Objetos Complejos y Uniones)
// En este ejercicio vas a modelar cómo se recibe la información de un servidor, la cual puede ser un éxito con datos o un fallo con un error.

// Crear el Tipo RespuestaServidor:
// Crea un tipo (puedes usar type) que sea una unión de dos situaciones posibles:

// Caso Éxito: Un objeto que tenga obligatoriamente estado: "success", codigo: 200, y una propiedad datos que sea un array de strings (los nombres de los productos).

// Caso Error: Un objeto que tenga obligatoriamente estado: "error", codigo: 400 o 500 (usa tipos literales para estos dos números), y una propiedad mensaje que sea un string con el detalle del error.

// Crear la Función procesarRespuesta:

// Debe recibir un parámetro llamado respuesta de tipo RespuestaServidor.

// Debe retornar un string.

// Lógica interna: Usa un if o un switch para evaluar respuesta.estado. Si es "success", debe retornar un texto que diga cuántos datos llegaron. Si es "error", debe retornar el mensaje de error en mayúsculas.

// El reto de TS: Si intentas acceder a respuesta.datos dentro del bloque de error, Cursor debería darte un error inmediatamente porque en ese caso datos no existe.

type RespuestaServidor = {
    estado: "success"
    codigo: 200
    datos: string[]
} | {
    estado: "error"
    codigo: 400 | 500
    mensaje: string
}


const procesarRespuesta = ( respuesta:RespuestaServidor ):string => {
    if(respuesta.estado === "success" ) {
       return `Numero de datos: ${respuesta.datos.length}`
    } else {
        return respuesta.mensaje.toUpperCase()
    }
}

const exito: RespuestaServidor = {
    estado: "success",
    codigo: 200,
    datos: ["prod1", "prod2", "prod3"],
  };
  
  const fallo: RespuestaServidor = {
    estado: "error",
    codigo: 500,
    mensaje: "Error detectado",
  };
  
  console.log(procesarRespuesta(exito));
  console.log(procesarRespuesta(fallo));