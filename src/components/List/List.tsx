import { Sub } from '../../types'

interface Props {
  subs: Array<Sub>
}

const List = ({ subs }: Props) => {
  /* vamos a crear un funcion que re-renderize un componente */
  const renderList = (): JSX.Element[] => {
    return subs.map(sub => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={sub.avatar} />
          <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      )
    })
  }
  return (
    <ul>
      {
        renderList()
      }
    </ul>
  )
}

export default List