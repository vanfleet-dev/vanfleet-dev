import React from 'react';
import SignUpForm from './SignUpForm';
import Btn from './Btn';

function SignUp(props) { // add props from Home
    function handleClick() {
        props.setSignUp(true); // when the 'sign up instance' of Btn is clicked, pass true for the value of showSignUp back up to the state defined in Home.
    };
    
    return (
        <div>
            {/* 
            the boolean value of props.showSignUp is used to determine which component is displayed 
            setSignUp={props.setSignUp} passes setSignUp down to Btn using props.
            handleClick is passed down to the 'sign up instance' of Btn.
            btnText passes down the text to be displayed in the 'sign up instance' of Btn.
            */}
            {props.showSignUp ? <SignUpForm /> : <Btn setSignUp={props.setSignUp} handleClick={handleClick} btnText={'SIGN UP?'}/>}
        </div>
    );

};

export default SignUp;