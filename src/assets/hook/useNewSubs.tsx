import { useReducer } from "react"
import { Sub } from '../../types';

// El valor inicial del estado
const INITIAL_STATE = ({
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
})
interface FormState {
  inputValue: Sub
}
// Creamos un tipo de dato
type FormReducerAction = {
  type: 'change_value'
  payload: {
    inputName: string
    inputValue: string
  }
} | {
  type: 'clear'
}

/**
 * !Un reducer recibe 2 parametros, el estado y la accion
 */
const formReducer = (state: FormState['inputValue'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change_value':
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case 'clear':
      return INITIAL_STATE
  }
}

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm