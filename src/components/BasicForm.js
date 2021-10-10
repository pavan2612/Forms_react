import useInput from "../Hooks/use-input";
const BasicForm = (props) => {

  const inputName = (name) => name.trim()!=='';
  const {
    inputBlurHandler:firstNameInputBlurHandler,
    inputChangeHandler:firstNameInputChangeHandler ,
    enteredInput: enteredFirstName,
    inputIsInvalid:firstNameInputIsInvalid,
    reset:resetFirstName} = useInput(inputName)

    const {
      inputBlurHandler:lastNameInputBlurHandler,
      inputChangeHandler:lastNameInputChangeHandler ,
      enteredInput: enteredLastName,
      inputIsInvalid:lastNameInputIsInvalid,
      reset:resetLastName} = useInput(inputName)
  

    const inputPassword = (name) => name.includes('@')
    const {
      inputBlurHandler:passwordInputBlurHandler,
      inputChangeHandler:passwordInputChangeHandler ,
      enteredInput: enteredPassword,
      inputIsInvalid:passwordInputIsInvalid,
      reset:resetPassword} = useInput(inputPassword)

      let formIsValid = false
      if(firstNameInputIsInvalid && lastNameInputIsInvalid && passwordInputIsInvalid){
        formIsValid=true
      }
  
    const submitHandler = (event) => {
    event.preventDefault()
    if(!formIsValid){
      return
    }
    resetFirstName()
    resetLastName()
    resetPassword()
  }
  const inputFirstClassname = firstNameInputIsInvalid ? 'form-control  invalid' : 'form-control'
  const inputLastClassname = lastNameInputIsInvalid ? 'form-control  invalid' : 'form-control'
  const inputClasspassword = passwordInputIsInvalid ? 'form-control  invalid' : 'form-control'
  
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={inputFirstClassname}>
          <label htmlFor='name'>First Name</label>
          <input type='text' 
          id='name' 
          value={enteredFirstName} 
          onBlur={firstNameInputBlurHandler}
          onChange={firstNameInputChangeHandler}/>
          {firstNameInputIsInvalid && <p className="error-text">please enter valid First name</p>}
        </div>
        <div className={inputLastClassname}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' 
          id='name' 
          value={enteredLastName} 
          onBlur={lastNameInputBlurHandler}
          onChange={lastNameInputChangeHandler}/>
          {lastNameInputIsInvalid && <p className="error-text">please enter valid Last name</p>}
        </div>
      </div>
      <div className={inputClasspassword}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' 
        id='name' 
        value={enteredPassword} 
        onBlur={passwordInputBlurHandler}
        onChange={passwordInputChangeHandler}/>
        {passwordInputIsInvalid && <p className="error-text">please enter valid email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
