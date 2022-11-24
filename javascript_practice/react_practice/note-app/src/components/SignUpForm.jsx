import React, {useState} from 'react'
import Input from './Input'
import Btn from './Btn'

function SignUpForm() {

    const [userSignUp, setUserSignUp] = useState({
        username: '',
        password1: '',
        password2: ''
    })

    const [finalSignUp, setFinalSignUp] = useState({
        username: '',
        password1: '',
        password2: ''
    })

    function handleChange(event) {
        const newVal = event.target.value;
        const curVal = event.target.name;

        setUserSignUp((prevValue) => {
            if (curVal === 'username') {
                return {
                    username: newVal,
                    password1: prevValue.password1,
                    password2: prevValue.password2
                }
            }
            if (curVal === 'password1') {
                return {
                    username: prevValue.username,
                    password1: newVal,
                    password2: prevValue.password2
                }
            }
            if (curVal === 'password2') {
                return {
                    username: prevValue.username,
                    password1: prevValue.password1,
                    password2: newVal
                }
            }
        })
    }

    function handleClick() {
        setFinalSignUp(userSignUp)
    }

    function usernameCheck(input) {
        const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (input.length >= 8) {
            return specialChars.test(input)
        } else {
            return true
        }
      } 

    const usernameCheckStatus = usernameCheck(finalSignUp.username)

    function passwordCheck1(input) {
        if (input.length >= 8) {
            return true
        } else {
            return false
        }
    }

    const passwordCheck1Status = passwordCheck1(finalSignUp.password1)

    function passwordCheck2(input) {
        if (input.length >= 8) {
            return true
        } else {
            return false
        }
    }

    const passwordCheck2Status = passwordCheck2(finalSignUp.password2)

    function passwordVerify(input1, input2) {
        if (passwordCheck1Status === true && passwordCheck2Status === true) {
            if (input1 === input2) {
                return true
            } else {
                return false
            }        
        }
    }

    const passwordVerifyStatus = passwordVerify(userSignUp.password1, userSignUp.password2)

    return (
        <div>
            <Input
            name='username'
            type='text'
            value={userSignUp.username}
            handleChange={handleChange}
            placeholder='username'
            />
            <Input
            name='password1'
            type='password'
            value={userSignUp.password1}
            handleChange={handleChange}
            placeholder='password'
            />
            <Input
            name='password2'
            type='password'
            value={userSignUp.password2}
            handleChange={handleChange}
            placeholder='password'
            />
            <Btn handleClick={handleClick} type='submit' btnText='SIGN UP' />

            <div>{finalSignUp.username}</div>
            {usernameCheckStatus ? 'error' : 'pass'}

            <div>{finalSignUp.password1}</div>
            <div>{finalSignUp.password2}</div>
            {passwordVerifyStatus ? 'pass' : 'error'}

        </div>
    )

}

export default SignUpForm