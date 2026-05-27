const moneda: number[] = [10,20,30]
const preciosOxxo: number[] = [50, 80, 100]; // Otra lista para probar

const etiqueta = (arrayNumbers: number[]):string[] => {
    return arrayNumbers.map(valor => `$${valor} USD`)
}

console.log(etiqueta(moneda))
console.log(etiqueta(preciosOxxo))