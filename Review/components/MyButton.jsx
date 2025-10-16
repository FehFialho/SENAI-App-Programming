

export const MyButton = ({onClick, content, color, hover, width, heigth}) => {
    return(
        <>  
            {/* <button style={{backgroundColor: color, width: width, height: heigth}}>{content}</button> */}
            <button onClick={onClick} className={`${color} ${heigth} ${width} hover:${hover}`}>{content}</button>
        </>
    )
}