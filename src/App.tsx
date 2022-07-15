import { useEffect, useRef, useState } from 'react'
import './App.css'
import List from './components/List/List'
import Form from './components/Form/Form'
import { Sub, SubsResponseFromApi } from './types'

/**
 * ! @type {AppState} Esta es una interfaz de estado
 */
interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)
  /**
   * * En el useEffect hacemos un fecht de la API, y lo que queremos que nos devuelva
   */
  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return fetch('http://localhost:3000/subs').then(res => res.json())
    }
    /**
     * 
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
    /**
     * *Luego lo que hacemos es pasarle al estado setSubs, los nuevos datos Mapeados
     */
    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)
}, [])

const divRef = useRef<HTMLDivElement>(null)

const handleNewSub = (newSub: Sub): void => {
  setSubs(subs => [...subs, newSub])
  setNewSubsNumber(newSubsNumber => newSubsNumber + 1)
}

return (
  <div className="App" ref={divRef}>
    <h1>Subscribers</h1>
    <List subs={subs} />
    New Subscribers: {newSubsNumber}
    <Form onNewSub={handleNewSub} />
  </div>
)
}

export default App
