// ProductoIncompleto: Debe tener id (number), nombre (string), y stock (number).

// ProductoFormateado: Debe tener id (number), nombre (string), tieneStock (boolean), y mensajeStock (un tipo literal unión: 'Agotado' | 'Últimas unidades' | 'Stock disponible').

// 2. Tu Misión: La Función normalizarCatalogo
// Crea una función llamada normalizarCatalogo.

// Debe recibir como parámetro un array de tipo ProductoIncompleto[].

// Debe retornar un nuevo array de tipo ProductoFormateado[].

// Dentro de la función, usa .map() para transformar la lista.

// 3. Lógica interna del .map() (Las reglas de transformación):
// Por cada producto del array original, debes devolver un objeto nuevo donde:

// El id se quede igual.

// El nombre se transforme completamente a minúsculas (puedes usar .toLowerCase()).

// tieneStock debe ser true si el stock original es mayor a 0, y false si es 0.

// mensajeStock se debe calcular con las siguientes condiciones basadas en el stock original:

// Si el stock es 0 ➡️ debe ser 'Agotado'.

// Si el stock es entre 1 y 5 ➡️ debe ser 'Últimas unidades'.

// Si el stock es mayor a 5 ➡️ debe ser 'Stock disponible'.


type ProductoIncompleto = {
    id: number
    nombre: string
    stock: number
}

type ProductoFormateado = {
    id: number
    nombre: string
    tieneStock: boolean
    mensajeStock: 'Agotado' | 'Ultimas unidades' | 'Stock disponible'
}

const normalizarCatalogo = (ArrayProducto: ProductoIncompleto[]):ProductoFormateado[] => {
    const nuevoArryay = ArrayProducto.map(producto => {
        return {
            ...producto,
            nombre: producto.nombre.toLocaleLowerCase(),
            tieneStock: producto.stock > 0 ? true : false,
            mensajeStock: producto.stock === 0 ? 'Agotado' : producto.stock >= 1 && producto.stock <= 5 ? 'Últimas unidades' : 'Stock disponible' 

        }
    })
    return nuevoArryay as ProductoFormateado[]
}

const productos: ProductoIncompleto[] = [
    { id: 1, nombre: 'Producto 1', stock: 0 },
    { id: 2, nombre: 'Producto 2', stock: 1 },
    { id: 3, nombre: 'Producto 3', stock: 5 },
    { id: 4, nombre: 'Producto 4', stock: 6 },
]

console.log(normalizarCatalogo(productos))