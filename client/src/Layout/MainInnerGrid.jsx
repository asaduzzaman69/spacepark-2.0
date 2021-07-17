import useScreenSize from "../shared-hooks/useScreenSIze";

const MainInnerGrid  = ({children}) => {
    const cols = useScreenSize()
    const gridColumn;


    if(cols === 'col-3') {
        gridColumn = '250px 1fr 330px'
    } else if (cols === 'col-2') {
        gridColumn = '1fr 330px'

    } else {
        gridColumn = '1fr'
        
    }
    return ( 

        <div style={{
            display: 'grid',
            gridTemplateColumns: gridColumn
        }}>
            {children}
        </div>

     );
}
 
export default MainInnerGrid ;