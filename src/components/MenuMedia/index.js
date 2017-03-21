import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as userActions from "../../actions/UserActions"

class MenuMedia extends Component {
    onButtonClick() {
        this.props.userActions.menuOpen();
    }
    render() {
        var styleNone = this.props.state.menu ? '_in' : '';

        return (
            <div>
                <header className='menu-media'>
                    <div className='menu-media_logo'></div>
                    <div className='menu-media_button' onClick={::this.onButtonClick}>
                        <div className='menu-media_button_block'>
                            <span className='menu-media_button_span'></span>
                            <span className='menu-media_button_span'></span>
                            <span className='menu-media_button_span'></span>
                        </div>
                    </div>
                </header >
                <div className={'menu-media_back' + styleNone}></div>
                <div className={'menu-media_nav' + styleNone}>
                    <ul className='menu-media_nav_ul'>
                        <Link to='/'><li className='menu-media_nav_ul_li' onClick={::this.onButtonClick}>Главная</li></Link>
                        <Link to='/loancalc'><li className='menu-media_nav_ul_li last' onClick={::this.onButtonClick}>Рассчитать кредит</li></Link>
                    </ul>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuMedia);