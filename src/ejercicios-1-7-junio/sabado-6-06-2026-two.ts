// Ejercicio 12 (Complejo): El Carrito con Impuestos Selectivos
//
// Contexto: Un array de objetos Articulo con nombre, precio, y categoria
// (tipo literal: 'alimento' | 'electronica' | 'libro').
//
// Misión: Transfórmalo en un array de objetos que calcule el precioFinal aplicando un impuesto
// diferente por categoría dentro del .map(): alimentos 0%, libros 4%, y electrónica 16%.

type Articulo = {
    nombre: string;
    precio: number;
    categoria: 'alimento' | 'electronica' | 'libro';
};

type ArticuloConImpuesto = {
    nombre: string;
    precioFinal: number;
    categoria: 'alimento' | 'electronica' | 'libro';
};
