// Crea estos dos tipos o interfaces en tu archivo:

// SuscripciónBruta: Debe tener id (string), email (string), plan (un tipo literal: 'free' | 'premium' | 'family'), y pagoAtrasado (boolean).

// SuscripciónProcesada: Debe tener id (string), email (string), tieneAcceso (boolean), y costoMensual (number).

// Tu Misión: La Función procesarSuscripciones
// Crea una función llamada procesarSuscripciones.

// Debe recibir como parámetro un array de tipo SuscripciónBruta[].

// Debe retornar un nuevo array de tipo SuscripciónProcesada[].

// Dentro de la función, usa .map() para transformar la lista.

type SuscripcionBruta = {
    id: string
    email: string
    plan: 'free' | 'premium' | 'family'
    pagoAtrasado: boolean
}

type SuscripciónProcesada = {
    id:string
    email: string
    tieneAcceso:boolean
    costoMensual: number
}

const procesarSuscripciones = (arraySuscripcion: SuscripcionBruta[]): SuscripciónProcesada[] => {
    return arraySuscripcion.map(suscripcion => {
        

        const tieneAcceso = suscripcion.plan === 'premium' || suscripcion.plan === 'family';

        // 2. Calculamos el costo base
        let costoBase = suscripcion.plan === 'free' ? 0 
                      : suscripcion.plan === 'premium' ? 10 
                      : 15; // Si no es free ni premium, por descarte es family

        // 3. Aplicamos la mora si corresponde
        if (suscripcion.pagoAtrasado && suscripcion.plan !== 'free') {
            costoBase += 5;
        }

        // 4. Retornamos EXACTAMENTE las propiedades que pide SuscripciónProcesada
        return {
            id: suscripcion.id,
            email: suscripcion.email,
            tieneAcceso: tieneAcceso,
            costoMensual: costoBase
        };
    });
}

const suscripciones: SuscripcionBruta[] = [
    { id: '1', email: 'usuario1@example.com', plan: 'free', pagoAtrasado: false },
    { id: '2', email: 'usuario2@example.com', plan: 'premium', pagoAtrasado: true },
    { id: '3', email: 'usuario3@example.com', plan: 'family', pagoAtrasado: false },
    { id: '4', email: 'usuario4@example.com', plan: 'free', pagoAtrasado: true },
    { id: '5', email: 'usuario5@example.com', plan: 'premium', pagoAtrasado: false },
]

const suscripcionesProcesadas = procesarSuscripciones(suscripciones)
console.log(suscripcionesProcesadas)