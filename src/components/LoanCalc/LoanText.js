import React, { Component } from 'react'
import { connect } from "react-redux"

class LoanText extends Component {
    render() {
        var props = this.props.state,
            loanText = '';

        switch(props.loanType) {
            case 0: {
                loanText = 'Аннуитетный тип - платеж остается неизменным в течение всего срока действия кредитного договора. Это значит, что каждый месяц вы будете платить за займ равными долями, которые состоят из начисленных процентов за кредит и части, списывающейся в счёт основного долга.'
                break;
            }
            case 1: {
                loanText = 'Дифференцированный тип - Ваш платёж с каждым месяцем будет уменьшаться за счёт того, что долг будет гаситься равными долями, а проценты будут начисляться ежемесячно на остаток долга.'
                break;
            }
            case 2: {
                loanText = 'Свободный тип - рассчитывается по формуле чистой приведенной стоимости (NPV). Вам необходимо задать размеры выплат по нескольким рассчетным периодам, оставшиеся платежи сервис рассчитает автоматически.'
                break;
            }
            default:
                break;
        }

        return (
            <div className='loanText-block'>
                <div className='loanText-block_text'>
                    {loanText}
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
export default connect(mapStateToProps)(LoanText);