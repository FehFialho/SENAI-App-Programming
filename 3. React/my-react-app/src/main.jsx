import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Hello's
import { HelloArrow } from '../components/HelloArrow.jsx'
import { HelloDeclaration } from '../components/HelloDeclaration.jsx'
import { HelloExpression } from '../components/HelloExpression.jsx'
// Square's
import { RedSquare } from '../components/RedSquare.jsx'
import { YellowSquare } from '../components/YellowSquare.jsx'
import { BlueSquare } from '../components/BlueSquare.jsx'
// Other
import { RowFlex } from '../components/RowFlex.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <RowFlex> */}
      <RedSquare></RedSquare>
      <BlueSquare></BlueSquare>
      <YellowSquare></YellowSquare>
    {/* </RowFlex> */}

    {/* <RowFlex> */}
      <HelloArrow></HelloArrow>
      <HelloDeclaration></HelloDeclaration>
      <HelloExpression></HelloExpression>
    {/* </RowFlex> */}
    
  </StrictMode>,
)
