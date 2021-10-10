import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const inputName = (name) => name.trim()!=='';

  const {
    inputBlurHandler:nameInputBlurHandler,
    inputChangeHandler:nameInputChangeHandler ,
    enteredInput: enteredName,
    inputIsInvalid:nameInputIsInvalid,
    reset:resetName} = useInput(inputName)

    const inputPassword = (name) => name.includes('@')
  
    const {
      inputBlurHandler:passwordInputBlurHandler,
      inputChangeHandler:passwordInputChangeHandler ,
      enteredInput: enteredPassword,
      inputIsInvalid:passwordInputIsInvalid,
      reset:resetPassword} = useInput(inputPassword)

    let formIsValid = false
    if(nameInputIsInvalid && passwordInputIsInvalid){
      formIsValid=true
    }

    const submitHandler = (event) => {
    event.preventDefault()
    if(!formIsValid){
      return
    }
    resetName()
    resetPassword()
  }

  const inputClassname = nameInputIsInvalid ? 'form-control  invalid' : 'form-control'
  const inputClasspassword = passwordInputIsInvalid ? 'form-control  invalid' : 'form-control'

  return (
    <form>
      <div className={inputClassname} onSubmit={submitHandler}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onBlur={nameInputBlurHandler}
        onChange={nameInputChangeHandler}
        value={enteredName}/>
      </div>
      {nameInputIsInvalid && <p>please enter valid name</p>}
      <div className={inputClasspassword} onSubmit={submitHandler}>
        <label htmlFor='name'>E-mail</label>
        <input 
        type='text' 
        id='name' 
        onBlur={passwordInputBlurHandler}
        onChange={passwordInputChangeHandler}
        value={enteredPassword}/>
      </div>
      {passwordInputIsInvalid && <p>please enter valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
