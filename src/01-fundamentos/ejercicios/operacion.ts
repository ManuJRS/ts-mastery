// En TS, también podemos definir qué "forma" debe tener una función.
// Crea un tipo (type) llamado Operacion. Este tipo debe describir una función que recibe dos números y devuelve un número.
// Crea dos constantes: sumar y restar, y asígnales el tipo Operacion.
// Crea una función llamada ejecutarCalculo que reciba: a (number), b (number) y una accion (de tipo Operacion).
// Prueba: Llama a ejecutarCalculo(5, 10, sumar).

type Operacion = (num1: number, num2:number) => number //Definir el type de la funcion

const sumar:Operacion = (a,b) => {
    return a+b
}

const restar:Operacion = (a,b) => {
    return a-b
}

const ejecutarCalculo = (x:number, y:number, calculo:Operacion):number => {
    return calculo(x,y)
}

console.log(ejecutarCalculo(5,5,restar))