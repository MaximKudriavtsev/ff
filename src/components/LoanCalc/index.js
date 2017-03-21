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
            Выражаю благодарность!
            Дизайн: Миндрин А.
            Помощь в разработке: Кочетыгов А. Скобельцын С. Арефьева Е.
            Отдельная благодарность: Индан А. Громова А. Шевчук О. Шалаева Т. Холопцева В. Васильева Т. Правдивец И. Морозов Д. Туголуков И. Дутов П. Наумкин М.
            Психологическая поддержка: мамуля, бабуля, дедуля, Ируля ♥
          </div>
        </div>
        <LoanChart />
        <LoanData />
        <Footer />
      </div>
    )
  }
}