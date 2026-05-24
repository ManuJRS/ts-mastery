// En este ejercicio vas a transformar un array de objetos en otro array de objetos, pero cambiando una propiedad numérica interna y manteniendo el tipado estricto.
const aplicarBlackFriday = (array, descuento) => {
    const nuevoProducto = array.map(producto => {
        return Object.assign(Object.assign({}, producto), { precioRebajado: producto.precio * (1 - descuento) });
    });
    return nuevoProducto;
};
const productos = [
    {
        id: "1",
        nombre: "Producto 1",
        precio: 100
    }
];
const productosOfertados = aplicarBlackFriday(productos, 0.30);
console.log(productosOfertados);
export {};
//# sourceMappingURL=calcular-descuentos.js.map