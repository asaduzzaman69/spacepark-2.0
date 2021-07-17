import { useMediaQuery } from "react-responsive";



const useScreenSize = () => {
    const isLaptop = useMediaQuery({ minWidth: '1200px' })
    const isTablet = useMediaQuery({ minWidth: '600px' })

    if (isLaptop) {
        return 'col-2'
    } else if (isTablet) {
        return 'col-1'
    }


    return 'col-3'


}


export default useScreenSize;