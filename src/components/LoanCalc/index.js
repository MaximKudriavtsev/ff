import React, { Component } from 'react'

import App from '../../containers/App'
import LoanInput from './LoanInput'
import LoanMoreInput from './LoanMoreInput'
import LoanInfo from './LoanInfo'
import LoanChart from './LoanChart'
import LoanData from './LoanData'
import Footer from '../Footer'
import MenuMedia from '../../components/MenuMedia'


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
        <div className='loanText-block'>
          <div className='loanText-block_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <LoanChart />
        <LoanData />
        <Footer />
      </div>
    )
  }
}