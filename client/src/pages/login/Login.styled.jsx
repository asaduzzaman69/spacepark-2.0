import styled  from "styled-components";


export const LoginWrapper = styled.div`
position: relative;
background-color: ${({theme}) => theme.bgMain};
color: red;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

 export const LoginCardWrapper = styled.div`

 width: 1200px;
 height: 600px;
 margin: auto;
 background-color: ${({theme}) => theme.bgWhite};
 display: grid;
 grid-template-columns: repeat(2,  1fr);
 position: relative;
 box-shadow: 10px 10px 20px #663399b0;




 

` 


export const LoginFormWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`


/* Need to change when we will develop the black theme */

export const LoginHeading = styled.h6`
font-weight: 600;
font-size: 26px;
text-align: center;
color: black;
margin-bottom: 20px;

`


/* export const butt */