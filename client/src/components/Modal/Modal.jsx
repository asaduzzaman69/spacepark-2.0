import { ModalContainer } from "./Modal.styled";
import Portal from "../Portal/portal";



const Modal = ({
    children,
    isOpen = true
}) => {

  
    return (
        <Portal>
            {
                isOpen ? (
                    <ModalContainer>
                        {children}
                    </ModalContainer>

                ) : null
            }
        </Portal>
    )
}
 
export default Modal;