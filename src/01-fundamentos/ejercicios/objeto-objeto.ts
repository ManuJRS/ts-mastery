// Aquí practicarás cómo alterar un estado basado en un Tipo Literal usando .map(). Muy útil para aplicaciones de mensajería o gestión de tareas (estilo Trello).

// Definición de Tipos:

// Crea un tipo EstadoMensaje que sea un tipo literal unión: 'enviado' | 'leido'.

// Crea un tipo Mensaje con las propiedades: id (number), texto (string), y estado (de tipo EstadoMensaje).

// Tu Misión: Crea una función llamada marcarTodoComoLeido.

// Debe recibir un array de tipo Mensaje[].

// Debe usar .map() para transformar la lista.

// Lógica interna: Si un mensaje tiene el estado 'enviado', el .map() debe devolver ese mensaje pero con el estado cambiado a 'leido'. Si ya estaba 'leido', lo deja igual.

// El Reto de TS: Asegúrate de que el tipo de retorno de la función sea estrictamente Mensaje[]. Si escribes mal la palabra 'leido' (por ejemplo, 'leído' con acento), Cursor debería marcarte un error inmediatamente gracias a tu tipo literal.

type EstadoMensaje = 'enviado' | 'leido'

type Mensaje = {
    id: number
    texto: string
    estado: EstadoMensaje
}

const marcarTodoComoLeido = (array:Mensaje[]):Mensaje[] => {
    return array.map((mensaje) => {
        if(mensaje.estado === 'enviado') {
         return {
            ...mensaje,
            estado: 'leido'
         }
        } else {
            return mensaje
        }
    })
}

const mensajes:Mensaje[] = [
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
]

const mensajesLeidos:Mensaje[] = marcarTodoComoLeido(mensajes)
console.log(mensajesLeidos)