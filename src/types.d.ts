export interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

// Creamos los tipos que recibimos de la API
export type SubsResponseFromApi = Array<{
  nick: string
  months: number
  profileURL: string
  description: string
}>