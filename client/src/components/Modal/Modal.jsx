import { ModalContainer } from "./Modal.styled";
import Portal from "../Portal/portal";



const Modal = ({
    children,
    isOpen,
}) => {

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