// 1. Alias de primitivos
type UUID = string;

// 2. Union Types (Lo usamos para el semáforo y volumen)
type EstadoSemaforo = "rojo" | "amarillo" | "verde";

// 3. Tuplas
type Coordenadas = [number, number]; 

// 4. Mapped Types (Generar tipos dinámicos a partir de otros)
type SoloLectura<T> = { readonly [P in keyof T]: T[P] };

