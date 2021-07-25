import { useState } from "react";

const useHorizontalScroll = (ref) => {
    const [isDown,setIsDown] = useState(false)
    ref.current.addEventListener('mousedown' , () => {
        setIsDown(true)
    })

    ref.current.addEventListener('mouseup', () => {
        setIsDown(false)
    })


    ref.current.addEventListener('mousemove', () => {
        if(!isDown) return;
        
    })

    return null;
}
 
export default useHorizontalScroll;