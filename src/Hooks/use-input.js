import { useState } from "react"

const useInput = (inputName) => {
    const [enteredInput,setEnteredInput] = useState('')
    const [enteredInputTouched,setEnteredInputTouched] = useState(false)

    const enteredInputIsValid = inputName(enteredInput)
    const inputIsInvalid = !enteredInputIsValid && enteredInputTouched

    const inputChangeHandler = (event) => {
        setEnteredInput(event.target.value)
      }
      const inputBlurHandler = (event) => {
        setEnteredInputTouched(true)
      }

    const reset = () => {
        setEnteredInput('')
        setEnteredInputTouched(false)
    }
    const setInputTouched = () => {
        setEnteredInputTouched(true)
    }
    return{
        inputBlurHandler,
        inputChangeHandler,
        enteredInput,
        inputIsInvalid,
        reset,
        enteredInputIsValid,
        setInputTouched
    }
}
export default useInput