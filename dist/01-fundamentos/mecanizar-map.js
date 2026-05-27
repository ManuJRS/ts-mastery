const moneda = [10, 20, 30];
const preciosOxxo = [50, 80, 100]; // Otra lista para probar
const etiqueta = (arrayNumbers) => {
    return arrayNumbers.map(valor => `$${valor} USD`);
};
console.log(etiqueta(moneda));
console.log(etiqueta(preciosOxxo));
export {};
//# sourceMappingURL=mecanizar-map.js.map