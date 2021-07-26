

export const LeftPanle = ({children}) => {
    return  (
        <div>
        {children}

        </div>
    )
}
export const RightPanel = ({children}) => {
    return  (
        <>
     {children}
      </>
    )
}
export const MiddlePanel = ({children}) => {
    return  (
        <div style={{overflow: 'auto', padding: '0px 20px'}}>
        {children}

        </div>
    )
}