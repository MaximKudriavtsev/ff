import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as loanActions from "../../actions/LoanActions"

import LoanBlock from '../../components/LoanCalc/LoanBlock'

class FreeTemplate extends Component {
    render() {
        var that = this,
            data = that.props.state.loanData || [],
            template, classNone = '';

        if (that.props.state.loanType == 2) {
            if (data.length) {
                template = data.map(function (item, index) {
                    return (
                        <LoanBlock data={item} index={index} key={index} />
                    )
                });
            } else {
                template = <div>No items...</div>
            }
        } else {
            classNone = 'none';
        }

        return <div className={'loanData ' + classNone}>
            <h2 className='h2-loan'>ТАБЛИЦА ПЛАТЕЖЕЙ</h2>
            <div className='loanData_block'>
                <table className='loanData_table'>
                    <tbody >
                        <tr className='loanData_table_head'>
                            <td className='loanData_table_header'>Месяц</td>
                            <td className='loanData_table_header'>Ежемесячный платеж</td>
                        </tr>
                        {template}
                    </tbody>
                </table>
            </div>
        </div >
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
export default connect(mapStateToProps, mapDispatchToProps)(FreeTemplate);