// Ejercicio 10 (Complejo): El Cronograma de Eventos
//
// Contexto: Un array de objetos Evento con nombre: string y fechaISO: string (ej: "2026-05-31").
//
// Misión: Transfórmalo para la interfaz del usuario. El nuevo objeto debe incluir el nombre
// y dos campos nuevos: diasRestantes (calculando la diferencia con el día de hoy) y esEstaSemana
// (un boolean que sea true si faltan menos de 7 días).
const interfaz = (evento) => {
    const nuevoEvento = evento.map(event => {
        const fecha = new Date();
        const fechaActual = fecha.toISOString();
        const dias = Math.ceil((new Date(event.fechaISO).getTime() - new Date(fechaActual).getTime()) / (1000 * 60 * 60 * 24));
        return Object.assign(Object.assign({}, event), { diasRestantes: dias, esEstaSemana: dias >= 0 && dias <= 7 ? true : false });
    });
    return nuevoEvento;
};
console.log(interfaz([{ nombre: 'Evento 1', fechaISO: '2026-06-12' }, { nombre: 'Evento 2', fechaISO: '2026-06-25' }]));
export {};
//# sourceMappingURL=viernes-5-06-2026-two.js.map