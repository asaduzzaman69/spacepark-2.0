import { ModalContainer } from "./Modal.styled";
import Portal from "../Portal/portal";



const Modal = ({
    children,
    isOpen,
}) => {

console.log(isOpen, children)

  
    return (
        <Portal isOpen={isOpen}>
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