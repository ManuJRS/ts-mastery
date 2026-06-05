// Ejercicio 8 (Complejo): El Reestructurador de la API de Clientes
//
// Contexto: Tu backend te envía los datos de clientes de forma desordenada:
// { info_personal: { nombre: "Luis", apellido: "Gomez" }, llave_id: 45 }.
//
// Misión: Define las interfaces correctas y usa .map() para "aplanar" el objeto.
// El array resultante debe tener objetos con una estructura limpia en la raíz:
// { id: 45, nombreCompleto: "Luis Gomez" }.
const jsonResponse = (cliente) => {
    const newClientResponse = cliente.map((clien) => ({
        id: clien.llave_id,
        nombreCompleto: `${clien.info_personal.nombre} ${clien.info_personal.apellido}`
    }));
    return newClientResponse;
};
const clientes = [
    {
        info_personal: {
            nombre: "Luis",
            apellido: "Gomez"
        },
        llave_id: 45
    }
];
console.log(jsonResponse(clientes));
export {};
//# sourceMappingURL=jueves-4-06-2026-two.js.map