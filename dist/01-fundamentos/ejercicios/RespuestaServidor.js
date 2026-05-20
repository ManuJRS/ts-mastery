// Ejercicio 10: El Procesador de Respuestas de API (Tipado de Objetos Complejos y Uniones)
// En este ejercicio vas a modelar cómo se recibe la información de un servidor, la cual puede ser un éxito con datos o un fallo con un error.
const procesarRespuesta = (respuesta) => {
    if (respuesta.estado === "success") {
        return `Numero de datos: ${respuesta.datos.length}`;
    }
    else {
        return respuesta.mensaje.toUpperCase();
    }
};
const exito = {
    estado: "success",
    codigo: 200,
    datos: ["prod1", "prod2", "prod3"],
};
const fallo = {
    estado: "error",
    codigo: 500,
    mensaje: "Error detectado",
};
console.log(procesarRespuesta(exito));
console.log(procesarRespuesta(fallo));
export {};
//# sourceMappingURL=RespuestaServidor.js.map