// Square with Props to Add Color
import '../MyStyle.css'

export const Square = ({color}) => {
    return <div className='square' style={{backgroundColor: color}}></div>
};

export const SquareClass = ({chosenClass}) => {
    return <div className={`square ${chosenClass}`}></div>
};