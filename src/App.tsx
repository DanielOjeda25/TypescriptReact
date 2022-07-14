import { useEffect, useState } from 'react'
import './App.css'

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}
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
      <ul>
        {
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={sub.avatar} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
