// Ejercicio 10 (Complejo): El Cronograma de Eventos
//
// Contexto: Un array de objetos Evento con nombre: string y fechaISO: string (ej: "2026-05-31").
//
// Misión: Transfórmalo para la interfaz del usuario. El nuevo objeto debe incluir el nombre
// y dos campos nuevos: diasRestantes (calculando la diferencia con el día de hoy) y esEstaSemana
// (un boolean que sea true si faltan menos de 7 días).

type Evento = {
    nombre: string;
    fechaISO: string;
};

type EventoUI = {
    nombre: string;
    diasRestantes: number;
    esEstaSemana: boolean;
};
