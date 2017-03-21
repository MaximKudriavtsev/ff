import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as loanActions from "../../actions/LoanActions"
import * as userActions from "../../actions/UserActions"
import './LoanMoreInput.css'

//import Slider from 'rc-slider'
//import 'rc-slider/assets/index.css';

/*<div className={'loanMoreInput_sliderForm' + classNone}>
                    <div className='loanInput_sliderForm_textForm'>
                        <div className='loanInput_sliderForm_textForm_text'>Начало выплат</div>
                        <select className='loanInput_sliderForm_textForm_input'>
                            <option>Аннуитетный</option>
                            <option>Дифференцированный</option>
                        </select>
                    </div>
                </div>

                <div className={'loanMoreInput_sliderForm' + classNone}>
                    <div className='loanInput_sliderForm_textForm'>
                        <div className='loanInput_sliderForm_textForm_text'>Единовременные комиссии</div>
                        <select className='loanInput_sliderForm_textForm_input'>
                            <option>% от суммы кредита</option>
                            <option>руб.</option>
                        </select>
                    </div>
                    <Slider min={5000} max={5000000} step={5000}
                        defaultValue={1000000}
                        marks={{ 5000: 5000, 5000000: 5000000 }}
                    />
                </div>

                <div className={'loanMoreInput_sliderForm' + classNone}>
                    <div className='loanInput_sliderForm_textForm'>
                        <div className='loanInput_sliderForm_textForm_text'>Ежемесячные комиссии</div>
                        <select className='loanInput_sliderForm_textForm_input'>
                            <option>% от суммы кредита</option>
                            <option>% от остатка долга</option>
                            <option>руб.</option>
                        </select>
                    </div>
                    <Slider min={5000} max={5000000} step={5000}
                        defaultValue={1000000}
                        marks={{ 5000: 5000, 5000000: 5000000 }}
                    />
                </div> */

class LoanMoreInput extends Component {
    onMoreInputClick() {
        this.props.userActions.changeMoreInput();
    }
    onTypeChange(e) {
        console.log(e.target.value);
        console.log(this.props);
        this.props.loanActions.changeType(e.target.value*1);
    }

    render() {
        var classNone = '',
            defVal='';

        switch(this.props.state.loanType) {
            case 0: {defVal='0'; break;}
            case 1: {defVal='1'; break;}
            default: break;
        }

        this.props.user.moreInput ? classNone = 'in' : null;
        return (
            <div className='loanMoreInput'>
                <div className='loanMoreInput_button' onClick={::this.onMoreInputClick}>Дополнительные параметры</div>
            <div className={'loanMoreInput_main' + classNone}>

                <div className={'loanMoreInput_sliderForm' + classNone}>
                    <div className='loanInput_sliderForm_textForm'>
                        <div className='loanInput_sliderForm_textForm_text'>Вид кредита</div>
                        <select className='loanInput_sliderForm_textForm_input'
                            onChange={ ::this.onTypeChange }
                            defaultValue={defVal}>
                            <option value='0'>Аннуитетный</option>
                            <option value='1'>Дифференцированный</option>
                        </select>
                    </div>
                </div>

                

            </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.loanCalculator,
        user: state.user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loanActions: bindActionCreators(loanActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoanMoreInput);