import { useEffect } from "react";
import ReactDOM from "react-dom";


const ModalRoot = document.getElementById('modal-root')

const Portal = ({
    children,
    isOpen

}) => {

    const el = document.createElement('div');

    useEffect(() => {
        ModalRoot.appendChild(el);
        return () => {
            ModalRoot.removeChild(el);
        }
    }, [isOpen])
    return ReactDOM.createPortal(children, el);
}

export default Portal;