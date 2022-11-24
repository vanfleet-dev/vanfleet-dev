import React, { useState } from 'react';
import Input from './Input';
import Btn from './Btn';

function Login() {

    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    });

    const [finalLogin, setFinalLogin] = useState({
        username: '',
        password: ''
    });

    function handleChange(event) {
        const newVal = event.target.value;
        const curVal = event.target.name;
  
        setUserLogin((prevValue) => {
            if (curVal === 'username') {
                return {
                    username: newVal,
                    password: prevValue.password
                }
            } else if (curVal === 'password') {
                return {
                    username: prevValue.username,
                    password: newVal
                }
            } 
        })
    }

    function handleClick() {
        setFinalLogin(userLogin)
    };

    return (
    
        <div>
            <Input 
            name='username'
            type='text'
            value={userLogin.username}
            handleChange={handleChange}
            placeholder='username'
            />
            <Input 
            name='password'
            type='password'
            value={userLogin.password}
            handleChange={handleChange}
            placeholder='password'
            />
            <Btn 
            type='submit' 
            handleClick={handleClick} 
            btnText='LOGIN'
            />

            <div>{userLogin.username}{userLogin.password}</div>
            <div>{finalLogin.username}{finalLogin.password}</div>

        </div>
    );
};

export default Login;