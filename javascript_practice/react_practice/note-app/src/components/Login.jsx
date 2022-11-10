import React from 'react';
import Input from './Input';

function Login() {
    return <form>
        <Input 
        type='text'
        placeholder='username'
        />
        <Input 
        type='password'
        placeholder='password'
        />
        <button type='submit'>LOGIN</button>
    </form>
};

export default Login;