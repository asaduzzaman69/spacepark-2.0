import useScreenSize from "../shared-hooks/useScreenSIze";

const MainInnerGrid  = ({children}) => {
    const cols = useScreenSize()
    let gridColumn;


    if(cols === 'col-3') {
        gridColumn = '250px minmax(0,1fr) 330px'
    } else if (cols === 'col-2') {
        gridColumn = 'minmax(0,1fr) 330px'

    } else {
        gridColumn = 'minmax(0,1fr)'
        
    }
    return ( 

        <div style={{
            display: 'grid',
            gridTemplateColumns: gridColumn,
            padding:'30px',
            columnGap: '20px',
            height: '100vh'
        }}>
            {children}
        </div>

     );
}
 
export default MainInnerGrid ;