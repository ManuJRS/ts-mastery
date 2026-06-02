// Ejercicio 2 (Complejo): El Optimizador de Estadísticas
//
// Contexto: Recibes un array de objetos tipo Jugador con nombre: string y puntos: number[]
// (un array de los puntos que hizo en 3 partidos).
//
// Misión: Transfórmalo en un array de objetos que mantenga el nombre, pero que reemplace
// el array de puntos por una sola propiedad llamada promedioPuntos (debes sumar los puntos
// y dividirlos entre el total de partidos dentro del .map()).
const arrayTransformado = (array) => {
    return array.map(jugador => {
        let suma = 0;
        for (const punto of jugador.puntos) {
            suma += punto;
        }
        return {
            nombre: jugador.nombre,
            promedioPuntos: suma / jugador.puntos.length
        };
    });
};
console.log(arrayTransformado([{ nombre: "Juan", puntos: [10, 20, 30] }, { nombre: "Pedro", puntos: [15, 25, 35] }, { nombre: "Maria", puntos: [20, 30, 40] }]));
export {};
//# sourceMappingURL=lunes-1-06-2026-two.js.map