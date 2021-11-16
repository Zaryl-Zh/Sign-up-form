import React, {useState} from 'react'
import classes from './SignupForm.module.css'

const SignupForm = () => {
     
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState({
         warning:'',
         warning2:'',
         warning3: ''
     });

     const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        

    
     const nameInputHandler = (e) => {
        setName(e.target.value)

     }

     const emailInputHandler = (e) => {
         setEmail(e.target.value)
    }

    const passwordInputHandler = (e) => {
         setPassword(e.target.value)
    }
      
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(!name.trim()) {
            setError((prevState) => ({...prevState, warning: 'please enter your name'}))
            
        }
        else if (!/\d/.test(name)) {
            setError((prevState) => ({...prevState, warning: 'username should include digits'}))
            return error
        }
        else (setError(''))
        
    
       if(!email.trim()) {
        setError((prevState) => ({...prevState, warning2: 'please enter your email'}))
            
        }
       else if( !validEmailRegex.test(email)) {
        setError((prevState) => ({...prevState, warning2: 'invalid email'}))
        return error
        }
        else (setError(''))

        if(!password.trim()) {
            setError((prevState) => ({...prevState, warning3: 'please enter your password'}))
                
            }
        else if(!/^[0-9\b]+$/.test(password) ) {
        setError((prevState) => ({...prevState, warning3: 'password should contain just numbers'}))
        return error  
            }
        else (setError(''))
      
        
      
       
    }
    

    return (
        <div 
          className={classes.container}>
            <div 
               className={classes.appWrapper}>
                <div>
                     <h2 className={classes.title}>Create Account</h2>
                </div>
                <form 
                onSubmit = {formSubmitHandler}
                className={classes.formWrapper}>
                    <div className={classes.name} >
                        <label 
                            className={classes.label} 
                            htmlFor='name'>Name</label>
                        <input 
                           className={classes.input} 
                           type='text' 
                           value={name} 
                           id='name' 
                           onChange={nameInputHandler}/>
                          
                           {error && <p className={classes.error}>{error.warning}</p>}
                    </div>
                   <div className={classes.email}>
                        <label 
                            className={classes.label} 
                            htmlFor='email'>Email</label>
                        <input 
                            className={classes.input} 
                            type='email' 
                            value={email} 
                            id='email' 
                            onChange={emailInputHandler}/>
                            {error && <p className={classes.error}>{error.warning2}</p>}
                    </div>
                 <div className={classes.password}>
                        <label 
                            className={classes.label} 
                            htmlFor='password'>Password</label>
                        <input 
                            className={classes.input} 
                            type='password' 
                            value={password} 
                            id='password' 
                            onChange={passwordInputHandler}/>
                            {error && <p className={classes.error}>{error.warning3}</p>}
                 </div>  
                 <div>
                        <button 
                           className={classes.submit} 
                           onClick={formSubmitHandler}>Sign Up</button>
                </div>     
                </form>
            </div>
            
        </div>
    )
}

export default SignupForm
