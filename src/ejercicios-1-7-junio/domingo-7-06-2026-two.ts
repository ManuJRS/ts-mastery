// Ejercicio 14 (Complejo): El Unificador de Datos (Simulando un "Join")
//
// Contexto: Tienes un array de objetos Compra con idUsuario: number y total: number.
// Aparte, tienes un array fijo global de usuarios donde buscas el nombre por ID.
//
// Misión: Usa .map() sobre el array de compras. Dentro del bloque, busca qué usuario coincide
// con el idUsuario de la compra y devuelve un objeto que combine la información:
// { compraId, nombreUsuario, total }. Si el usuario no existe, pon "Invitado".

type Compra = {
    idUsuario: number;
    total: number;
};

type Usuario = {
    id: number;
    nombre: string;
};

type CompraUnificada = {
    compraId: number;
    nombreUsuario: string;
    total: number;
};
