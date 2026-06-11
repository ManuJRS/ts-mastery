// Ejercicio 11 (Sencillo): El Agregador de Propinas
//
// Contexto: Un array con los consumos de varias mesas en un restaurante: [150, 420, 80, 230].
//
// Misión: Devuelve un nuevo array sumándole el 10% de propina a cada cuenta.
// Asegúrate de redondear el resultado a dos decimales.
const consumos = [150, 420, 80, 230];
const sumaPropina = (mesas) => {
    const calcularPropinas = mesas.map(consumo => {
        return (consumo * .10) + consumo;
    });
    return calcularPropinas;
};
console.log(sumaPropina(consumos));
export {};
//# sourceMappingURL=sabado-6-06-2026-one.js.map