// Imagina que tienes una lista de productos o canciones, y quieres crear una función genérica que filtre esa lista. En lugar de crear una función para "filtrar por precio", otra para "filtrar por nombre" y otra para "filtrar por stock", crearás una sola función de filtrado que reciba el criterio como una función.
// REVISIÓN (opcional estilo): las tres criterios pueden ser una sola expresión booleana
// (p. ej. return num > 100) sin if/return true/false; el tipo CriterioFiltrado ya exige boolean.
const esCaro = (num) => {
    return num > 100;
};
const tieneStock = (num) => {
    if (num > 0) {
        return true;
    }
    return false;
};
const esOferta = (num) => {
    if (num < 20) {
        return true;
    }
    return false;
};
// CORRECCIÓN (nueva): resultado NO debe vivir aquí fuera de evaluarLista.
// Es una sola variable global del módulo: cada llamada a evaluarLista reutiliza el mismo array
// y los push se acumulan entre llamadas (segunda llamada = datos viejos + nuevos). Muévelo DENTRO de la función.
const evaluarLista = (valores, filtro) => {
    const resultado = [];
    // CORRECCIÓN (nueva): dentro del for debes usar filtro(valor) antes del push.
    // Ahora haces push de TODOS los valores; con esCaro deberías quedarte solo con los > 100 ([120, 200]).
    // Ejemplo de condición: if (filtro(valor)) { resultado.push(valor); }
    for (const valor of valores) {
        if (filtro(valor)) {
            resultado.push(valor);
        }
    }
    return resultado;
};
const precios = [10, 50, 120, 200, 0, 5];
// CORRECCIÓN (nueva): tras arreglar filtro + resultado interno, prueba también:
// console.log(evaluarLista(precios, tieneStock))  → sin el 0
// console.log(evaluarLista(precios, esOferta))    → [10, 5]
console.log(evaluarLista(precios, esCaro));
console.log(evaluarLista(precios, tieneStock));
console.log(evaluarLista(precios, esOferta));
export {};
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
//# sourceMappingURL=filtro.js.map