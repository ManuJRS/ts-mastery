// Este ejercicio sirve para practicar la transformación matemática simple y asegurar que el tipo de retorno sigue siendo numérico.
// Datos de origen: Crea un array llamado preciosEuros que contenga 5 números (ej: [10, 25, 50, 7.5, 100]).
// Tu Misión: Crea una función llamada convertirAMonedaLocal.
// Debe recibir el array de euros (number[]) y una tasaCambio (un número, por ejemplo 1.1 para dólares o 20.5 para pesos).
// Dentro de la función, usa .map() para multiplicar cada precio por la tasa.
// El Reto de TS: Asegúrate de tipar explícitamente el retorno de la función para que devuelva un number[].
const preciosEuros = [10, 25, 50, 7.5, 100];
const convertirAMonedaLocal = (euros, tasaCambio) => {
    return euros.map(euro => euro * tasaCambio);
};
const resultado = convertirAMonedaLocal(preciosEuros, 1.1);
console.log(resultado);
export {};
//# sourceMappingURL=convertir-divisas.js.map