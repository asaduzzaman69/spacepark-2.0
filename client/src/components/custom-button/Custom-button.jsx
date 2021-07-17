import { CustomButtonWrapper } from "./custom-button.styled";

const CustomButton = ({children,handleClick}) => {
    return ( 
        <CustomButtonWrapper onClick={() => handleClick && handleClick() }>
           {children}
        </CustomButtonWrapper>
     );
}
 
export default CustomButton;