import { useState } from "react";
import CustomInput from "../custom-input/custom-input";
import { SignupButton } from "./signup.styled";
import { ApiCore } from "../../services/api/core";
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [signupCredentials, setSignupCredentials] = useState({displayName: "", email: '', password: '',confirmPassword: ''})
    const { displayName,email,password ,confirmPassword } = signupCredentials;
    const history  = useHistory()

    const handleChange = e => {
        const { name, value } = e.target


        setSignupCredentials({...signupCredentials, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            window.alert('password didnt matched');
            return
        }
       const API = new ApiCore()

        try {
         const res =  await  API.signup({
            displayName,
            email,
            password  
        })  

        window.localStorage.setItem('user', JSON.stringify({ token: res.token, id: res.id}))
        history.push('/')
        } catch (err) {
            console.log(err)
        }

           

    }


    return (
        <form style={{
            width: '55%'
        }}
        onSubmit={handleSubmit}
        >
            <h1>Welcome</h1>
            <CustomInput
                label="Display Name"
                name="displayName"
                value={displayName}
                handleChange={handleChange}
                

            />
            <CustomInput
                label="Email"
                name="email"
                value={email}
                handleChange={handleChange}

            />
            <CustomInput
                label="Password"
                name="password"
                value={password}
                handleChange={handleChange}

            />
            <CustomInput
                label="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                handleChange={handleChange}

            />
            <SignupButton>Sign Up</SignupButton>
        </form>
    );
}

export default Signup;