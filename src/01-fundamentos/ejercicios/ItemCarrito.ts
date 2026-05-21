// Ejercicio 11: El Transfomador de Carrito (Tipado de Métodos de Arrays)
// Aquí vas a practicar cómo tipar funciones que transforman estructuras de datos usando métodos como .map() o .reduce().
// Definir los Tipos de Entidad:
// Crea un tipo ItemCarrito que represente un producto en el carrito. Debe tener: id (number), nombre (string), precio (number), y cantidad (number).
// Crea un tipo TicketFactura que represente el resumen para el cliente. Debe tener: totalNeto (number), impuesto (number), y totalFinal (number).
// Crear la Función generarTicket:
// Debe recibir un parámetro items que sea un array de objetos de tipo ItemCarrito.
// Debe retornar un objeto que cumpla estrictamente con la estructura de TicketFactura.
// Lógica interna: Debe calcular el totalNeto sumando el (precio * cantidad) de todos los items. El impuesto debe ser el 16% del total neto. El totalFinal debe ser la suma de ambos.

type ItemCarrito = {
    id: number
    nombre: string
    precio: number
    cantidad: number
}

type TicketFactura = {
    totalNeto: number
    impuesto: number
    totalFinal: number
}

const generarTicket = (items: ItemCarrito[]): TicketFactura => {
     const subtotales = items.map(item => item.precio * item.cantidad)
     console.log("subtotales", subtotales)
     const totalNeto = subtotales.reduce((acc, curr) => acc + curr, 0)
     console.log("totalNeto", totalNeto)
     const impuesto = totalNeto * 0.16
     const totalFinal = totalNeto + impuesto
     return { totalNeto, impuesto, totalFinal }
}

const items: ItemCarrito[] = [
    { id: 1, nombre: "Producto 1", precio: 10, cantidad: 2 },
    { id: 2, nombre: "Producto 2", precio: 20, cantidad: 3 },
    { id: 3, nombre: "Producto 3", precio: 30, cantidad: 4 },
]

const ticket = generarTicket(items)
console.log(ticket)

