import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as loanActions from "../../actions/LoanActions"

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

class LoanCalc extends Component {
    onChange1(value) {
        this.props.loanActions.changeRate(value, 1, false);
    }
    onChange2(value) {
        this.props.loanActions.changeRate(value, 2, false);
    }
    onChange3(value) {
        this.props.loanActions.changeRate(value, 3, false);
    }
    onAfterChange() {
        this.props.loanActions.changeChart();
    }


    onInputChange(e) {
        var target = e.target,
            value = +target.value;
        
        switch (target.id) {
            case '1': {
                value > 5000000 ? value = 5000000 : null;
                value < 1 ? value = 1 : null;
                return this.props.loanActions.changeRate(value, 1, true);
            }
            case '2':{
                value > 60 ? value = 60 : null;
                value < 1 ? value = 1 : null;
                return this.props.loanActions.changeRate(value, 2, true);
            }
            case '3':{
                value > 25 ? value = 25 : null;
                value < 1 ? value = 0.1 : null;
                return this.props.loanActions.changeRate(value, 3, true);
            }
            case '4':{
                return this.props.loanActions.changeRate(target.value, 4, true);
            }
        }
    }

    render() {
        var that = this,
            state = that.props.state,
            loanSum = state.loanSum,
            loanTime = state.loanTime,
            loanRate = state.loanRate;

        return (
            <div className='loanInput'>
                <div className='loanInput_content'>
                    <div className='loanInput_sliderForm'>
                        <div className='loanInput_sliderForm_textForm'>
                            <div className='loanInput_sliderForm_textForm_text'>Сумма кредита</div>
                            <input className='loanInput_sliderForm_textForm_input'
                                onChange={:: that.onInputChange}
                                value={loanSum}
                                id='1'
                                type='number'
                                step='5000'
                            />
                        </div>
                        <Slider min={5000} max={5000000} step={5000}
                            defaultValue={1000000}
                            value={loanSum}
                            onChange={:: that.onChange1}
                            onAfterChange={:: that.onAfterChange}
                            marks={{ 5000: 5000, 5000000: 5000000 }}
                        />
                    </div>

                    <div className='loanInput_sliderForm'>
                        <div className='loanInput_sliderForm_textForm'>
                            <div className='loanInput_sliderForm_textForm_text'>Срок кредитования</div>
                            <input className='loanInput_sliderForm_textForm_input'
                                onChange={:: that.onInputChange}
                                value={loanTime}
                                id='2'
                                type='number'
                            />
                        </div>
                        <Slider min={1} max={60}
                            defaultValue={36}
                            value={loanTime}
                            onChange={:: that.onChange2}
                            onAfterChange={:: that.onAfterChange}
                            marks={{ 1: 1, 60: 60 }}
                        />
                    </div>

                    <div className='loanInput_sliderForm'>
                        <div className='loanInput_sliderForm_textForm'>
                            <div className='loanInput_sliderForm_textForm_text'>Процентная ставка</div>
                            <input className='loanInput_sliderForm_textForm_input'
                                onChange={:: that.onInputChange}
                                value={loanRate}
                                id='3'
                                type='number'
                                step='0.1'
                            />
                        </div>
                        <Slider min={0.1} max={25}
                            defaultValue={15}
                            value={loanRate}
                            onChange={:: that.onChange3}
                            onAfterChange={:: that.onAfterChange}
                            marks={{ 0.1: 0.1, 25: 25 }}
                            step={0.1}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.loanCalculator
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loanActions: bindActionCreators(loanActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoanCalc);