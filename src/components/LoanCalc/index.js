import React, { Component } from 'react'

import App from '../../containers/App'
import FreeTemplate from '../../containers/FreeTemplate'
import LoanInput from './LoanInput'
import LoanMoreInput from './LoanMoreInput'
import LoanInfo from './LoanInfo'
import LoanChart from './LoanChart'
import LoanData from './LoanData'
import Footer from '../Footer'
import MenuMedia from '../../components/MenuMedia'
import LoanText from './LoanText'

export default class LoanCalc extends Component {
  render() {
    return (
      <div className=''>
        <App />
        <MenuMedia />
        <div className='loanInformation'>
          <h2 className='h2-loan'>ИНФОРМАЦИЯ ПО КРЕДИТУ</h2>
          <LoanInput />
          <LoanInfo />
          <LoanMoreInput />
        </div>
        <LoanText />
        <LoanChart />
        <LoanData />
        <FreeTemplate />
        <Footer />
      </div>
    )
  }
}