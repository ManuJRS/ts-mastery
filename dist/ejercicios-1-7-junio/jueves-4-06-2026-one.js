// Ejercicio 7 (Sencillo): Extractor de IDs
//
// Contexto: Un array de objetos Usuario que tienen id: number, username: string y token: string.
//
// Misión: Pasa de un array de objetos complejos a un simple array de números (number[])
// que contenga únicamente los IDs de los usuarios.
const arrayId = (arrayIdUser) => {
    const newArray = arrayIdUser.map(ids => {
        return ids.id;
    });
    return newArray;
};
const arrayIdUser = [
    { id: 1, username: "pepe", token: "1234567890" },
    { id: 2, username: "jose", token: "1234567890" },
    { id: 32, username: "carlos", token: "1234567890" },
];
console.log(arrayId(arrayIdUser));
export {};
//# sourceMappingURL=jueves-4-06-2026-one.js.map