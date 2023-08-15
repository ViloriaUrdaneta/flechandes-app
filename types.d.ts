export interface Flete {
    origen: string
    destino: string
    carga: string
    foto?: string
    vehiculo: string
    fecha: string
    ayudante: string
    oferta: string
    seguro: boolean
}

export type FletesResponseFromApi = Array<{
    origen: string
    destino: string
    carga: string
    foto?: string
    vehiculo: string
    fecha: string
    ayudante: string
    oferta: string
    seguro: boolean
}>