import { CustomButtonWrapper } from "./custom-button.styled";

const CustomButton = ({children,className, handleClick, ...otherProps}) => {
    return ( 
        <CustomButtonWrapper {...otherProps} className={className} onClick={() => handleClick && handleClick() }>
           {children}
        </CustomButtonWrapper>
     );
}
 
export default CustomButton;