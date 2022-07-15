import { Sub, SubsResponseFromApi } from "../types"

export const getallSubs = () => {
  return fetchSubs().then(mapFromApiToSubs)
}

const fetchSubs = (): Promise<SubsResponseFromApi> => {
  return fetch('http://localhost:3000/subs').then(res => res.json())
}

/**
 * * este metodo lo que hace es recibir los tipos de datos desde la API
 * * y luego los mapeamos cambiando sus tipos o asignandoles nuevos tipos de datos
 */
const mapFromApiToSubs = (api: SubsResponseFromApi): Array<Sub> => {
  return api.map(subFromApi => {
    const { nick, months: subMonths, profileURL: avatar, description } = subFromApi
    return {
      nick,
      subMonths,
      avatar,
      description
    }
  })
}