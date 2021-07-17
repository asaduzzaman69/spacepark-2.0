import { Input, Label } from "./custom-input.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const CustomInput = ({handleChange, label, icon, ...otherProps}) => {
    return ( 
        <div>
            {label && <Label>{ label }</Label>}
            <FontAwesomeIcon icon={faSearch} />
            <Input
            onChange={handleChange}
           {...otherProps}
            
            />
        </div>
     );
}
 
export default CustomInput;