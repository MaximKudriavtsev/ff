import React, { Component } from 'react'
import { connect } from "react-redux"

class LoanInfo extends Component {
    render() {
        var loanCulcProps = this.props.loanCalculator,
            loanSum = loanCulcProps.loanSum,
            loanTime = loanCulcProps.loanTime,
            loanData = loanCulcProps.loanData,
            allSum = 0,
            overPay, overRate, maxSum=0, minSum=9999999;

/*По-хорошему вся логика должна быть спрятана и передаваться уже готовыми
объектами*/
        for (var item in loanData) {
            let monthSum = loanData[item].monthSum;

            if(monthSum > maxSum)
                maxSum = monthSum;
            if(monthSum < minSum)
                minSum = monthSum;

            allSum += loanData[item].monthSum;
        }
        allSum = Math.round(allSum*100)/100;
        overPay = Math.round((allSum - loanSum)*100)/100;
        overRate = Math.round((overPay / loanSum * 100)*1000)/1000;

        return (
            <div className='loanInfo'>
                <div className='loanInfo_content'>
                    <table className='loanInfo_table'>
                        <tbody >
                            <tr className='loanInfo_tr'>
                                <td className='loanInfo_td'>Сумма кредита:</td>
                                <td className='loanInfo_td colorRed'>{loanSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб.</td>
                            </tr>
                            <tr className='loanInfo_tr'>
                                <td className='loanInfo_td'>Срок кредитования:</td>
                                <td className='loanInfo_td colorRed'>{loanTime} мес.</td>
                            </tr>
                            <tr className='loanInfo_tr'>
                                <td className='loanInfo_td'>Ежемесячный платеж:</td>
                                <td className='loanInfo_td colorRed'>
                                    {maxSum != minSum ? minSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ... ' : null}
                                    {maxSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб.
                                    </td>
                            </tr>
                            <tr className='loanInfo_tr'>
                                <td className='loanInfo_td'>Общая сумма выплат:</td>
                                <td className='loanInfo_td colorRed'>{allSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб.</td>
                            </tr>
                            <tr className='loanInfo_tr'>
                                <td className='loanInfo_td'>Общая переплата:</td>
                                <td className='loanInfo_td colorRed'>{overPay.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб.</td>
                            </tr>
                            <tr>
                                <td className='loanInfo_td last'>Процент переплаты:</td>
                                <td className='colorRed'>{overRate} %</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loanCalculator: state.loanCalculator
    };
}
export default connect(mapStateToProps)(LoanInfo);