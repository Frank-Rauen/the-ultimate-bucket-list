import React, { Component } from 'react';
import styles from './SignupForm.module.css';

class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    };

    getInitialState() {
        return{
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
        }
    }

    isFormValid = () => {
        return (
            this.state.email && 
            this.state.password && 
        this.state.password === this.state.passwordConfirmation
        );
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.setState(this.getInitialState());
    }

   render() {
       return (
        <form onSubmit={this.handleSubmit} className={styles.form}>
             <fieldset>
             <legend>Signup Form</legend>
            <label htmlFor='name'>Full Name:</label>               
               <input id="name" 
               name='name' 
               type='text'
               value={this.state.name}
               onChange={this.handleChange}/>

            <label htmlFor='email'>Email:</label>
               <input id='email' 
               name='email' 
               type='email' 
               value={this.state.email}
               onChange={this.handleChange}/>

            <label htmlFor='password'>Password:</label>
               <input id='password' 
               name='password' 
               type='password' 
               value={this.state.password}
               onChange={this.handleChange}/>

            <label htmlFor='passwordConfirmation'>Confirm Password:</label>
               <input i
               d='passwordConfirmation' 
               name='passwordConfirmation' 
               type='password' 
               alue={this.state.passwordConfirmation}
               onChange={this.handleChange}/>

               <button disabled={!this.isFormValid()} type='submit'>Submit</button>
            </fieldset>
           </form>
       )
   }
}

export default SignupForm;