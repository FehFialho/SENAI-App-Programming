import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Hello's
import { HelloArrow } from '../components/Hellos/HelloArrow.jsx'
import { HelloDeclaration } from '../components/Hellos/HelloDeclaration.jsx'
import { HelloExpression } from '../components/Hellos/HelloExpression.jsx'
// Square's
import { Square, SquareClass } from '../components/Squares/Square.jsx'
import { RedSquare } from '../components/Squares/RedSquare.jsx'
import { YellowSquare } from '../components/Squares/YellowSquare.jsx'
import { BlueSquare } from '../components/Squares/BlueSquare.jsx'

// Buttons
import { ButtonDissapear } from '../components/ButtonDissapear.jsx'
import { BtnColor } from '../components/Button/BtnColor.jsx'
import { BtnCount } from '../components/Button/BtnCount.jsx'

// Other
import { RowFlex } from '../components/RowFlex.jsx'
import { MyInput } from '../components/MyInput.jsx'
import { LearnUseEffect } from '../components/UseEffect/LearnUseEffect.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      {/* <RedSquare></RedSquare>
      <BlueSquare></BlueSquare> */}

      {/* <HelloArrow></HelloArrow>
      <HelloDeclaration></HelloDeclaration>
      <HelloExpression></HelloExpression> */}
    
    <MyInput></MyInput>
    <ButtonDissapear></ButtonDissapear>
    <BtnColor></BtnColor>
    <BtnCount></BtnCount>

    <LearnUseEffect></LearnUseEffect>

    {/* <YellowSquare></YellowSquare>
    <Square color={"white"}></Square>
    <SquareClass chosenClass="red"></SquareClass> */}
    
  </StrictMode>,
)
