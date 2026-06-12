// Ejercicio 12 (Complejo): El Carrito con Impuestos Selectivos
//
// Contexto: Un array de objetos Articulo con nombre, precio, y categoria
// (tipo literal: 'alimento' | 'electronica' | 'libro').
//
// Misión: Transfórmalo en un array de objetos que calcule el precioFinal aplicando un impuesto
// diferente por categoría dentro del .map(): alimentos 0%, libros 4%, y electrónica 16%.
const calcularImpuestos = (articulo) => {
    const calculoImpuesto = articulo.map(art => {
        const calculoLibro = (art.precio * 0.04) + art.precio;
        const calculoElectronica = (art.precio * 0.16) + art.precio;
        return Object.assign(Object.assign({}, art), { precioFinal: art.categoria === 'libro' ? calculoLibro : art.categoria === 'electronica' ? calculoElectronica : art.precio, categoria: art.categoria });
    });
    return calculoImpuesto;
};
const articulos = [
    { nombre: "Libro", precio: 10, categoria: "libro" },
    { nombre: "Electrónica", precio: 20, categoria: "electronica" },
    { nombre: "Alimentación", precio: 30, categoria: "alimento" },
];
console.log(calcularImpuestos(articulos));
export {};
//# sourceMappingURL=sabado-6-06-2026-two.js.map