import styled, { keyframes } from 'styled-components';

const skStretchdelay = keyframes`
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
    20% { -webkit-transform: scaleY(1.0) }
`;


  

export const SpinnerContainer = styled.div`
    margin: 10px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;


    & > div {
    background-color: #1778f2ad;
    margin: 1px;
    height: 100%;
    width: 6px;
    display: inline-block;
    
    -webkit-animation:${skStretchdelay} 1.2s infinite ease-in-out;
    animation:${skStretchdelay} 1.2s infinite ease-in-out;

    }

    & >  .rect2 {
        -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
    }
    & >  .rect3 {
        -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
    }
    & >  .rect4 {
        -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
    }
    & >  .rect5 {
        -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
    }

`




