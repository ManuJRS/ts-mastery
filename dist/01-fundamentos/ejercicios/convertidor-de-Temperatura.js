//Este ejercicio practica parámetros con tipos literales y retorno numérico.
//Crea una función convertirTemperatura.Recibe un valor grado (number) y un sistema (que solo puede ser 'C' o 'F').
//Si el sistema es 'C', debe convertirlo a Fahrenheit ($F = C \times 1.8 + 32$).
//Si el sistema es 'F', debe convertirlo a Celsius ($C = (F - 32) / 1.8$).
//Reto: Asegúrate de que el retorno de la función sea siempre un number.
const convertirTemperatura = (grado, sistema) => {
    if (sistema === "c") {
        return (grado * 1.8) + 32;
    }
    else {
        return (grado - 32) / 1.8;
    }
};
console.log(convertirTemperatura(32, "c"));
console.log("hola");
export {};
//# sourceMappingURL=convertidor-de-Temperatura.js.map