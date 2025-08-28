import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Hello's
import { HelloArrow } from '../components/Hellos/HelloArrow.jsx'
import { HelloDeclaration } from '../components/Hellos/HelloDeclaration.jsx'
import { HelloExpression } from '../components/Hellos/HelloExpression.jsx'
// Square's
import { RedSquare } from '../components/Squares/RedSquare.jsx'
import { YellowSquare } from '../components/Squares/YellowSquare.jsx'
import { BlueSquare } from '../components/Squares/BlueSquare.jsx'

import { Square, SquareClass } from '../components/Square.jsx'
// Other
import { RowFlex } from '../components/RowFlex.jsx'

import './index.css'
import App from './App.jsx'
import { MyInput } from '../components/MyInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      {/* <RedSquare></RedSquare>
      <BlueSquare></BlueSquare> */}
      <YellowSquare></YellowSquare>

      {/* <HelloArrow></HelloArrow>
      <HelloDeclaration></HelloDeclaration>
      <HelloExpression></HelloExpression> */}
    <MyInput></MyInput>

    <Square color={"white"}></Square>
    <SquareClass chosenClass="red"></SquareClass>
    
  </StrictMode>,
)
