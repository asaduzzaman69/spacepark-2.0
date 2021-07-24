import { useState } from 'react';
import Login from '../../pages/login/Login';
import Signup from '../signup/signup';
import { AuthCardWrapper, AuthWrapper,AuthFormWrapper } from './auth.styled'


const Auth = () => {
    const [isSignup, setIsSignup] = useState(true)

    const toggleMode = () => setIsSignup(!isSignup)
    return ( 
        <AuthWrapper>
            <AuthCardWrapper>
                <AuthFormWrapper>
                  {
                      isSignup ? (
                          <Signup />
                      ) : (
                          <Login />
                      )
                  }

                  {
                      isSignup ? ( <p>Aldready Have an account!? login</p>) : <p>Don't have any account. Create new Account</p>
                  }
                </AuthFormWrapper>
            </AuthCardWrapper>
        </AuthWrapper>

     );
}
 
export default Auth;