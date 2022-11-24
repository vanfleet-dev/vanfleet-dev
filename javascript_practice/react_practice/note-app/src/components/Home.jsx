import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function Home() {

    // elevated state. 
    // setSignUp is passed down through SignUp to SignUpBtn where onClick event changes showSignUp (boolean) to 'true'
    // showSignUp is passed down to SignUp where it id used by a ternary expression to display the sign up form and hide the sign up button
    const [showSignUp, setSignUp] = useState(false); 
   

    return (
    
        <div>

            {/* setSignUp and showSignUp are assigned to props */}
            {showSignUp ? null : <Login />}
        
            <SignUp setSignUp={setSignUp} showSignUp={showSignUp}/>
        
        </div>
    );
};

export default Home;