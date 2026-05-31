Recuerda tener tu terminal con npx tsc --watch abierta para que TypeScript te guíe con los errores en tiempo real.

🗓️ Lunes: El Calentamiento (Números y Operaciones)
Ejercicio 1 (Sencillo): El Multiplicador Posicional

Contexto: Tienes un array de números: [10, 20, 30, 40].

Misión: Usa .map() aprovechando su segundo parámetro (el índice) para multiplicar cada número por su posición en el array. El resultado esperado es [0, 20, 60, 120].

Ejercicio 2 (Complejo): El Optimizador de Estadísticas

Contexto: Recibes un array de objetos tipo Jugador con nombre: string y puntos: number[] (un array de los puntos que hizo en 3 partidos).

Misión: Transfórmalo en un array de objetos que mantenga el nombre, pero que reemplace el array de puntos por una sola propiedad llamada promedioPuntos (debes sumar los puntos y dividirlos entre el total de partidos dentro del .map()).

🗓️ Martes: Manipulación de Texto (Strings)
Ejercicio 3 (Sencillo): El Generador de Slugs (URLs)

Contexto: Un array de títulos de artículos: ["Curso de TS", "Aprende Map", "Estructura de Datos"].

Misión: Usa .map() para convertir cada título a minúsculas y reemplazar los espacios por guiones medios (puedes usar .replace(/ /g, "-")). Ejemplo: "curso-de-ts".

Ejercicio 4 (Complejo): El Ofuscador de Correos (Privacidad)

Contexto: Un array de strings con correos electrónicos: ["juan.perez@gmail.com", "ana@outlook.com"].

Misión: Transfórmalos para proteger su privacidad. El .map() debe recortar el correo y mostrar solo las primeras 3 letras, seguidas de *** y el dominio. Ejemplo: "jua***@gmail.com". (Pista: usa .split('@') y .substring()).

🗓️ Miércoles: Booleans y Estados Literales
Ejercicio 5 (Sencillo): El Sensor de Temperatura

Contexto: Un array de temperaturas en Celsius: [15, 36, 22, 40, 12].

Misión: Transfórmalo en un array de booleans (boolean[]) donde sea true si la temperatura supera los 30 grados (alerta de calor) y false si no.

Ejercicio 6 (Complejo): El Gestor de Tareas (To-Do List)

Contexto: Un array de objetos Tarea con id, actividad: string, y progreso: number (un número de 0 a 100).

Misión: Transfórmalo en un nuevo tipo de objeto llamado TareaEstado que elimine el número de progreso y añada una propiedad llamada estado que sea un tipo literal: 'pendiente' | 'en-progreso' | 'completada'. Debes calcular el string del estado según el porcentaje (0 = pendiente, 1 a 99 = en-progreso, 100 = completada).

🗓️ Jueves: Extracción y Estructuras Limpias
Ejercicio 7 (Sencillo): Extractor de IDs

Contexto: Un array de objetos Usuario que tienen id: number, username: string y token: string.

Misión: Pasa de un array de objetos complejos a un simple array de números (number[]) que contenga únicamente los IDs de los usuarios.

Ejercicio 8 (Complejo): El Reestructurador de la API de Clientes

Contexto: Tu backend te envía los datos de clientes de forma desordenada: { info_personal: { nombre: "Luis", apellido: "Gomez" }, llave_id: 45 }.

Misión: Define las interfaces correctas y usa .map() para "aplanar" el objeto. El array resultante debe tener objetos con una estructura limpia en la raíz: { id: 45, nombreCompleto: "Luis Gomez" }.

🗓️ Viernes: Fechas y Tiempos
Ejercicio 9 (Sencillo): Calculador de Edades

Contexto: Un array con los años de nacimiento de varias personas: [1995, 2000, 1988, 2010].

Misión: Transfórmalo en un array de números que represente la edad que cumplen esas personas en el año actual (2026).

Ejercicio 10 (Complejo): El Cronograma de Eventos

Contexto: Un array de objetos Evento con nombre: string y fechaISO: string (ej: "2026-05-31").

Misión: Transfórmalo para la interfaz del usuario. El nuevo objeto debe incluir el nombre y dos campos nuevos: diasRestantes (calculando la diferencia con el día de hoy) y esEstaSemana (un boolean que sea true si faltan menos de 7 días).

🗓️ Sábado: Finanzas y Descuentos Colectivos
Ejercicio 11 (Sencillo): El Agregador de Propinas

Contexto: Un array con los consumos de varias mesas en un restaurante: [150, 420, 80, 230].

Misión: Devuelve un nuevo array sumándole el 10% de propina a cada cuenta. Asegúrate de redondear el resultado a dos decimales.

Ejercicio 12 (Complejo): El Carrito con Impuestos Selectivos

Contexto: Un array de objetos Articulo con nombre, precio, y categoria (tipo literal: 'alimento' | 'electronica' | 'libro').

Misión: Transfórmalo en un array de objetos que calcule el precioFinal aplicando un impuesto diferente por categoría dentro del .map(): alimentos 0%, libros 4%, y electrónica 16%.

🗓️ Domingo: El Gran Cierre (Datos Cruzados)
Ejercicio 13 (Sencillo): El Contador de Caracteres

Contexto: Un array de contraseñas de usuarios (strings).

Misión: Transfórmalo en un array de números que indique la longitud (el .length) de cada contraseña.

Ejercicio 14 (Complejo): El Unificador de Datos (Simulando un "Join")

Contexto: Tienes un array de objetos Compra con idUsuario: number y total: number. Aparte, tienes un array fijo global de usuarios donde buscas el nombre por ID.

Misión: Usa .map() sobre el array de compras. Dentro del bloque, busca qué usuario coincide con el idUsuario de la compra y devuelve un objeto que combine la información: { compraId, nombreUsuario, total }. Si el usuario no existe, pon "Invitado".