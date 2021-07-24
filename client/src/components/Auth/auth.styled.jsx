import styled  from "styled-components";
import CustomButton from "./../custom-button/Custom-button";


export const AuthWrapper = styled.div`
position: relative;
background-color: ${({theme}) => theme.bgMain};
color: red;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

 export const AuthCardWrapper = styled.div`

 width: 1200px;
 height: 600px;
 margin: auto;
 background-color: ${({theme}) => theme.bgWhite};
 display: grid;
 grid-template-columns: repeat(2,  1fr);
 position: relative;
 box-shadow: 10px 10px 20px #663399b0;




 

` 


export const AuthFormWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`