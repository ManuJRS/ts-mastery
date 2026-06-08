// Ejercicio 9 (Sencillo): Calculador de Edades
//
// Contexto: Un array con los años de nacimiento de varias personas: [1995, 2000, 1988, 2010].
//
// Misión: Transfórmalo en un array de números que represente la edad que cumplen esas personas
// en el año actual (2026).

const anosNacimiento: number[] = [1995, 2000, 1988, 2010];

const calculoEdad = (fechas:number[]):number[] => {
    const edad = fechas.map(date => {
        return 2026 - date
    })
    return edad
}



console.log(calculoEdad(anosNacimiento))