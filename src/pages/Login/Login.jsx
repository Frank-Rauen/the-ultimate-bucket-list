import React from 'react';
import styles from './Login.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';


const Login = (props => {
    return (
        <main className={styles.main}>
            <img src="https://cdn.cltampa.com/files/base/scomm/cltampa/image/2019/07/960w/Screen_Shot_2019_07_29_at_10.08.55_AM.5d3efe05e83f3.jpg" alt="Bar"/>
            <div>
            <h1>Login</h1>
            <LoginForm 
            {...props}/>
            </div>
        </main>
    )
});

export default Login;