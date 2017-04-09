import React, { Component } from 'react'
import { Link } from 'react-router'
import App from '../../containers/App'
import Footer from '../Footer'
import MenuMedia from '../MenuMedia'

import "../../styles/app.css"


export default class Home extends Component {
  render() {
    var clientHeight = document.documentElement.clientHeight,
        clientWidth = document.documentElement.clientWidth,
        height = clientHeight;

    clientWidth >= 770 ? height -= 50 : null;

    if(clientWidth < 1400)
      clientHeight > 992 ? height = 992 : null;
    if(clientWidth < 1200)
      clientHeight > 1000 ? height = 1000 : null;
    if(clientWidth < 990)
      clientHeight > 900 ? height = 900 : null;
    if(clientWidth < 770)
      clientHeight > 1200 ? height = 1200 : null;
    if(clientWidth > 1400)
      clientHeight > 1281 ? height = 1281 : null;

    return (
      <div className='home'>
        <App />
        <MenuMedia />
        <div className='home_intro' style={{height: height}}>
          <div className='home_intro_content'>
            <h1 className='home_intro_content_headline-slogan'>Кредитный калькулятор</h1>
            <div className='home_intro_content_headline-text'>Гибкая задача кредитных параметров, быстрый рассчет платежей и формирование наглядной таблицы выплат.
              <p>Просто и удобно!</p>
            </div>
            <Link to='/loancalc'><button className='home_intro_content_headline-button'>Рассчитать кредит</button></Link>
          </div>
        </div>
        <div className='home_product-main'>
          <div className="home_product-main_product">
            <div className="home_product-main_product_img img-1">
              <div className="home_product-main_product_il il-1"></div>
            </div>
            <div className="home_product-main_product_text">
              <div className="text-block-right">
                <h2>ПРОСТОЙ ВВОД ДЛЯ БЫСТРОГО РАСЧЕТА КРЕДИТА</h2>
                <div className='home_product-main_product_text_il il-1'></div>
                <div className="text-info">Всего три ключевых параметра для расчета Вашего кредита.</div>
              </div>
            </div>
          </div>
          <div className="home_product-main_product-left">
            <div className="home_product-main_product_text">
              <div className="text-block-left">
                <h2>ВСЁ ВАЖНОЕ СРАЗУ И ПОД РУКОЙ</h2>
                <div className='home_product-main_product_text_il il-2'></div>
                <div className="text-info">Основная информация по кредиту для Вашего удобства.</div>
              </div>
            </div>
            <div className="home_product-main_product_img img-2">
              <div className="home_product-main_product_il il-2"></div>
            </div>
          </div>
          <div className="home_product-main_product">
            <div className="home_product-main_product_img img-3">
              <div className="home_product-main_product_il il-3"></div>
            </div>
            <div className="home_product-main_product_text">
              <div className="text-block-right">
                <h2>КРЕДИТНАЯ СТАТИСТИКА НАГЛЯДНО</h2>
                <div className='home_product-main_product_text_il il-3'></div>
                <div className="text-info">Проценты и основной долг наглядно в ежемесячных платежах.</div>
              </div>
            </div>
          </div>
          <div className="home_product-main_product-left">
            <div className="home_product-main_product_text">
              <div className="text-block-left">
                <h2>РАСПЕЧАТАЙ ГРАФИК ПЛАТЕЖЕЙ</h2>
                <div className='home_product-main_product_text_il il-4'></div>
                <div className="text-info">Полученную статистику платежей легко распечатать и сохранить.</div>
              </div>
            </div>
            <div className="home_product-main_product_img img-4">
              <div className="home_product-main_product_il il-4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}