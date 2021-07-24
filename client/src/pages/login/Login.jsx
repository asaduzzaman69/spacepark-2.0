import CustomInput from '../../components/custom-input/custom-input';
import { AlignVertical } from '../../shared-styles/alignment';
import { LoginCardWrapper, LoginWrapper, LoginFormWrapper, LoginHeading, LoginButton } from './Login.styled';
const Login = () => {
    return (
        <>

                    <div style={{
                        width: '55%'
                    }}>
                        <LoginHeading>Welcome</LoginHeading>
                        <CustomInput
                            label="Email"

                        />
                        <CustomInput
                            label="Password"

                        />
{/*                         <CustomInput
                            label="Confirm Password"

                        /> */}
                        <LoginButton>Sign Up</LoginButton>
                    </div>


                <AlignVertical>
                    <img width="100%" src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1626452733/undraw_Social_share_re_qb4v_lkrmme.svg" alt="" />
                </AlignVertical>

                </>

    );
}

export default Login;