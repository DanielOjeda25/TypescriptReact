import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List/List'
import Form from './components/Form/Form'
import { Sub } from './types'

/**
 * ! @type {AppState} Esta es una interfaz de estado
 */
interface AppState {
  subs: Array<Sub>
}
const INITIAL_STATE = [{
  nick: 'dapelu',
  subMonths: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu',
  description: 'es moderador'
},
{
  nick: 'miduDev',
  subMonths: 2,
  avatar: 'https://i.pravatar.cc/150?u=miduDev',
}]

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
  return (
    <div className="App">
      <h1>Subscribers</h1>
      <List subs={subs}/>
      <Form />
    </div>
  )
}

export default App
