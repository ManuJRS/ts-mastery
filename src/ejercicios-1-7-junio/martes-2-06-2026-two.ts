// Ejercicio 4 (Complejo): El Ofuscador de Correos (Privacidad)
//
// Contexto: Un array de strings con correos electrónicos: ["juan.perez@gmail.com", "ana@outlook.com"].
//
// Misión: Transfórmalos para proteger su privacidad. El .map() debe recortar el correo y mostrar
// solo las primeras 3 letras, seguidas de *** y el dominio. Ejemplo: "jua***@gmail.com".
// (Pista: usa .split('@') y .substring()).

const correos = ["juan.perez@gmail.com", "ana@outlook.com"];


const ofuscarCorreos = (correos:string[]):string[] => {
    const usuarios = correos.map(correo => {
        const partes = correo.split('@')
        return partes[0]?.substring(0,3) + '***@' + partes[1]
    });
    return usuarios as string[];
};

console.log(ofuscarCorreos(correos));

