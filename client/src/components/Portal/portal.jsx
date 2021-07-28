import { useEffect } from "react";
import ReactDOM from "react-dom";


const ModalRoot = document.getElementById('modal-root')

const Portal = ({
    children,
}) => {

    console.log(children)
    const el = document.createElement('div');

    useEffect(() => {
        ModalRoot.appendChild(el);
        return () => {
            ModalRoot.removeChild(el);
        }
    }, [])
    return ReactDOM.createPortal(children, el);
}

export default Portal;