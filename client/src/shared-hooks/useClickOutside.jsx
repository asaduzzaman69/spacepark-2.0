import { useCallback, useReducer, useRef, useState } from "react";

const useClickOutside = (ref) => {
    const [isClickedOutside,setIsClickOutside] = useState(false);

    // useCallBack
    const clickRef = useRef()

    useCallback(() => {
        window.addEventListener('click', (e) => {

        console.log(e.target)



    })
    },[])






    return [isClickedOutside, clickRef];
}
 
export default useClickOutside;