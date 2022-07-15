import useNewSubForm from '../../assets/hook/useNewSubs';
import { Sub } from '../../types'
interface FormProps {
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
  /* const [inputValue, setInputValue] = useState<FormState['inputValue']>(INITIAL_STATE) */

  /**
   * *El use reducer necesita un reducer, como primer argumento y un estado inicial como segundo argumento
   */
  const [inputValue, dispatch] = useNewSubForm()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValue)
    handleClick()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }
  const handleClick = () => {
    dispatch({
      type: 'clear'
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue.nick} type="text" name="nick" placeholder="Nickname" />
        <input onChange={handleChange} value={inputValue.avatar} type="text" name="avatar" placeholder="Avatar" />
        <input onChange={handleChange} value={inputValue.subMonths} type="number" name="subMonths" placeholder="Subscription Months" />
        <textarea onChange={handleChange} value={inputValue.description} name="description" placeholder="Description"></textarea>
        <button type="submit">Save new Sub!</button>
        <button type="button" onClick={handleClick}>Clear the form</button>
      </form>
    </div>
  )
}

export default Form