import React from 'react'
import { Route/*, IndexRoute*/ } from 'react-router'

//import App from './containers/App'
import Home from './components/Home'
import LoanCalc from './components/LoanCalc'
import NotFound from './components/NotFound'

import "./styles/app.css"

export const routes = (
  <div>
    <Route path='/' component={Home} />
    <Route path='/loancalc' component={LoanCalc} />
    <Route path='*' component={NotFound} />
  </div>
)