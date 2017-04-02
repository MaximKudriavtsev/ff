import React, { Component } from 'react'
import NavLink from '../../components/NavLink/index'
//import NavItem from '../../components/NavItem/index'
/*
<NavItem to='/' index={true}>Home</NavItem>
<NavItem to='/a'>A</NavItem>
*/

export default class App extends Component {
  render() {
    return (
      <header className='header'>
        <nav className='nav'>
          <ul className='header_nav'>
            <li><NavLink onlyActiveOnIndex={true} to='/'><div className='nav_text'>Главная</div></NavLink></li>
            <li><NavLink to='/loancalc'><div className='nav_text'>Кредитный калькулятор</div></NavLink></li>
          </ul>
        </nav>
        {this.props.children}
      </header>
    )
  }
}