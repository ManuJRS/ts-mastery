// En este ejercicio vas a transformar un array de objetos en otro array de objetos, pero cambiando una propiedad numérica interna y manteniendo el tipado estricto.

// Definición de Tipos:

// Crea un tipo ProductoOriginal con las propiedades: id (string), nombre (string), y precio (number).

// Crea un tipo ProductoOfertado con las propiedades: id (string), nombre (string), precio (number), y un campo nuevo llamado precioRebajado (number).

// Tu Misión: Crea una función llamada aplicarBlackFriday.

// Debe recibir un array de tipo ProductoOriginal[] y un porcentaje de descuento (un número entre 0 y 1, por ejemplo 0.20 para un 20%).

// Debe usar .map() para retornar un nuevo array de tipo ProductoOfertado[].

// Lógica interna: Dentro del .map(), calcula el precioRebajado y devuelve el nuevo objeto con todas las propiedades requeridas.

// Ojo con TS: Asegúrate de no mutar el objeto original; debes retornar un objeto nuevo (return { ...producto, precioRebajado: ... }).

type ProductoOriginal = {
    id:string
    nombre:string
    precio:number
}
type ProductoOfertado = {
    id:string
    nombre:string
    precio:number
    precioRebajado:number
}

const aplicarBlackFriday = (array:ProductoOriginal[], descuento:number):ProductoOfertado[] => {
    const nuevoProducto = array.map(producto => {
        return {
            ...producto,
            precioRebajado:producto.precio * (1 - descuento)
        }
    })
    return nuevoProducto
}

const productos:ProductoOriginal[] = [
    {
        id: "1",
        nombre: "Producto 1",
        precio: 100
    }
]

const productosOfertados:ProductoOfertado[] = aplicarBlackFriday(productos, 0.30)
console.log(productosOfertados)