// Aquí practicarás cómo alterar un estado basado en un Tipo Literal usando .map(). Muy útil para aplicaciones de mensajería o gestión de tareas (estilo Trello).
const marcarTodoComoLeido = (array) => {
    return array.map((mensaje) => {
        if (mensaje.estado === 'enviado') {
            return Object.assign(Object.assign({}, mensaje), { estado: 'leido' });
        }
        else {
            return mensaje;
        }
    });
};
const mensajes = [
    {
        id: 1,
        texto: 'Hola',
        estado: 'enviado'
    },
    {
        id: 2,
        texto: 'Hola',
        estado: 'leido'
    }
];
const mensajesLeidos = marcarTodoComoLeido(mensajes);
console.log(mensajesLeidos);
export {};
//# sourceMappingURL=objeto-objeto.js.map