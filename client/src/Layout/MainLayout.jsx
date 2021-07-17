import useScreenSize from "../shared-hooks/useScreenSIze"
import { LeftPanle, MiddlePanel, RightPanel } from "./gridPanels";



const Mainlayout = ({left,right,middle}) => {
    const cols = useScreenSize()
    let gridContent;


    if(cols === 'col-3')  {
        gridContent =  (
            <>
                <LeftPanle>{left}</LeftPanle>
                <MiddlePanel>{middle}</MiddlePanel>
                <RightPanel>{right}</RightPanel>

            </>
        )
    } else if (cols === 'col-2') {
        gridContent =  (
            <>
                <MiddlePanel>{middle}</MiddlePanel>
                <RightPanel>{right}</RightPanel>

            </>
        )
    } else if(cols === 'col-1') {
        gridContent = (
                <>
                    <MiddlePanel>{middle}</MiddlePanel>
                </>
            
        )
    }


    return (

        <MainInnerGrid>
            {gridContent}
        </MainInnerGrid>

        

        
    )
}


export default Mainlayout