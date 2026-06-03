// Ejercicio 4 (Complejo): El Ofuscador de Correos (Privacidad)
//
// Contexto: Un array de strings con correos electrónicos: ["juan.perez@gmail.com", "ana@outlook.com"].
//
// Misión: Transfórmalos para proteger su privacidad. El .map() debe recortar el correo y mostrar
// solo las primeras 3 letras, seguidas de *** y el dominio. Ejemplo: "jua***@gmail.com".
// (Pista: usa .split('@') y .substring()).
const correos = ["juan.perez@gmail.com", "ana@outlook.com"];
const ofuscarCorreos = (correos) => {
    const usuarios = correos.map(correo => {
        var _a;
        const partes = correo.split('@');
        return ((_a = partes[0]) === null || _a === void 0 ? void 0 : _a.substring(0, 3)) + '***@' + partes[1];
    });
    return usuarios;
};
console.log(ofuscarCorreos(correos));
export {};
//# sourceMappingURL=martes-2-06-2026-two.js.map