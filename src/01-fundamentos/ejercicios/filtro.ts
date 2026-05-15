// Imagina que tienes una lista de productos o canciones, y quieres crear una función genérica que filtre esa lista. En lugar de crear una función para "filtrar por precio", otra para "filtrar por nombre" y otra para "filtrar por stock", crearás una sola función de filtrado que reciba el criterio como una función.

// Paso 1: Definir el Tipo de Función (El Contrato)
// Vas a crear un tipo llamado CriterioFiltrado.
// Este tipo debe describir una función que recibe un numero (por ejemplo, el precio o stock de un producto).
// Debe devolver un boolean (true si cumple la condición, false si no).

// Paso 2: Crear las Funciones de Criterio
// Crea tres constantes que implementen el tipo CriterioFiltrado:
// esCaro: Devuelve true si el número es mayor a 100.
// tieneStock: Devuelve true si el número es mayor a 0.
// esOferta: Devuelve true si el número es menor a 20.

// Paso 3: La Función Principal
// Crea una función llamada evaluarLista.
// Debe recibir un array de números: valores: number[].
// Debe recibir la función de filtrado: filtro: CriterioFiltrado.
// Debe devolver un nuevo array de números que solo contenga los valores que pasaron el filtro (es decir, donde la función filtro devolvió true).

// Pista: Puedes usar el método .filter() de JavaScript dentro de tu función, o un bucle for...of manual para ir llenando un nuevo array.

type CriterioFiltrado = (numero: number) => boolean

// REVISIÓN (opcional estilo): las tres criterios pueden ser una sola expresión booleana
// (p. ej. return num > 100) sin if/return true/false; el tipo CriterioFiltrado ya exige boolean.
const esCaro: CriterioFiltrado = (num: number) => {
    return num > 100
}

const tieneStock: CriterioFiltrado = (num:number) => {
    if(num > 0) {
        return true
    }
    return false
}

const esOferta: CriterioFiltrado = (num:number) => {
    if (num < 20) {
        return true
    }
    return false
}
// CORRECCIÓN (nueva): resultado NO debe vivir aquí fuera de evaluarLista.
// Es una sola variable global del módulo: cada llamada a evaluarLista reutiliza el mismo array
// y los push se acumulan entre llamadas (segunda llamada = datos viejos + nuevos). Muévelo DENTRO de la función.

const evaluarLista = (valores: number[], filtro: CriterioFiltrado): number[] => {
    const resultado: number[] = []
    // CORRECCIÓN (nueva): dentro del for debes usar filtro(valor) antes del push.
    // Ahora haces push de TODOS los valores; con esCaro deberías quedarte solo con los > 100 ([120, 200]).
    // Ejemplo de condición: if (filtro(valor)) { resultado.push(valor); }
    for (const valor of valores) {
        if (filtro(valor)) {
            resultado.push(valor)
        }
    }
    return resultado
}

const precios = [10, 50, 120, 200, 0, 5]
// CORRECCIÓN (nueva): tras arreglar filtro + resultado interno, prueba también:
// console.log(evaluarLista(precios, tieneStock))  → sin el 0
// console.log(evaluarLista(precios, esOferta))    → [10, 5]
console.log(evaluarLista(precios, esCaro))
console.log(evaluarLista(precios, tieneStock))
console.log(evaluarLista(precios, esOferta))

// =============================================================================
// REVISIÓN (tutor) — segunda pasada
// =============================================================================
// ✓ Paso 1: CriterioFiltrado correcto.
// ✓ Paso 2: esCaro simplificado bien; tieneStock y esOferta siguen válidos (opcional unificar estilo con esCaro).
// ~ Paso 3: ya anotas ): number[] y haces return — bien.
// ✗ Paso 3 (lógica): aún no filtras; empujas todos los elementos. Falta llamar a filtro(valor).
// ✗ Paso 3 (alcance): resultado declarado fuera de la función — bug de estado compartido entre llamadas.
// ✓ Prueba: con esCaro el resultado esperado es [120, 200], no el array completo.
// Dato pro: si usas .filter(), no necesitas array resultado manual; .filter() ya devuelve un array nuevo.
// Trampa común: confundir "recorrer y copiar" con "recorrer y aplicar criterio"; el parámetro filtro existe para invocarlo en cada vuelta.

