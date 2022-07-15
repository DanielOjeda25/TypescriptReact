import { useEffect, useRef, useState } from 'react'
import './App.css'
import List from './components/List/List'
import Form from './components/Form/Form'
import { Sub } from './types'
import { getallSubs } from '../src/services/getallSubs'

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
    /**
     * *Luego lo que hacemos es pasarle al estado setSubs, los nuevos datos Mapeados
     */
    getallSubs().then(setSubs)
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
