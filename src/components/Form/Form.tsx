import { useState } from 'react';

interface FormState {
  
}

const Form = () => {
  const [inputValue, setInputValue] = useState({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

  const handleSubmit = () => {

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
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
      </form>
    </div>
  )
}

export default Form