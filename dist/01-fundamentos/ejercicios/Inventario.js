// Ejercicio 6: El Sistema de Inventario (Arrays + Objetos)
// Aquí practicaremos cómo definir la estructura de lo que entra a una función.
// Crea una función llamada agregarProducto.
// Debe recibir un array de productos. Cada producto es un objeto con: nombre (string) y stock (number).
// Debe recibir un segundo parámetro: el nuevoProducto (mismo objeto).
// La función debe devolver un nuevo array con todos los productos más el nuevo.
// Reto: Tipa el array de entrada y el de salida como object[] es muy vago, intenta ser más específico con los nombres de las propiedades.
// Primer parámetro: lista de productos. Segundo: un solo producto nuevo.
// Retorno: NUEVO array (no mutar el de entrada con push).
const agregarProducto = (productos, nuevoProducto) => {
    return [...productos, nuevoProducto];
};
const catalogo = [{ nombre: "Teclado", stock: 3 }];
console.log(agregarProducto(catalogo, { nombre: "Ratón", stock: 10 }));
export {};
//# sourceMappingURL=Inventario.js.map