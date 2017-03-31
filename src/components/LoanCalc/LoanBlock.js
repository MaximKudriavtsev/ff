import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as loanActions from "../../actions/LoanActions"

class LoanBlock extends Component {
    onInputChange(e) {
        this.props.loanActions.changeFreeData(this.props.index, e.target.value * 1, true);
    }
    render() {
        var item = this.props.data,
            className,
            classWhite = 'white',
            classBlack = 'black';


        (this.props.index % 2 == 0) ? className = classBlack : className = classWhite;

        return <tr>
            <td className={className}>{item.time}</td>
            <td className={className}>
                <input
                    className='loanInput_sliderForm_textForm_input'
                    placeholder={item.monthSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}
                    type='number'
                    onChange={::this.onInputChange}
                /></td>
        </tr>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoanBlock);