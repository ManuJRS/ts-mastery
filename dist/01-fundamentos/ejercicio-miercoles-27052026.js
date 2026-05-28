// ProductoIncompleto: Debe tener id (number), nombre (string), y stock (number).
const normalizarCatalogo = (ArrayProducto) => {
    const nuevoArryay = ArrayProducto.map(producto => {
        return Object.assign(Object.assign({}, producto), { nombre: producto.nombre.toLocaleLowerCase(), tieneStock: producto.stock > 0 ? true : false, mensajeStock: producto.stock === 0 ? 'Agotado' : producto.stock >= 1 && producto.stock <= 5 ? 'Últimas unidades' : 'Stock disponible' });
    });
    return nuevoArryay;
};
const productos = [
    { id: 1, nombre: 'Producto 1', stock: 0 },
    { id: 2, nombre: 'Producto 2', stock: 1 },
    { id: 3, nombre: 'Producto 3', stock: 5 },
    { id: 4, nombre: 'Producto 4', stock: 6 },
];
console.log(normalizarCatalogo(productos));
export {};
//# sourceMappingURL=ejercicio-miercoles-27052026.js.map