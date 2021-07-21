import { useMediaQuery } from "react-responsive";



const useScreenSize = () => {
    const isLaptop = useMediaQuery({ maxWidth: '1200px' })
    const isTablet = useMediaQuery({ maxWidth: '600px' })

    if (isTablet) {
        return 'col-1'
    } else if (isLaptop) {
        return 'col-2'
    }


    return 'col-3'


}


export default useScreenSize;