import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoanData extends Component {
    callPrint() {
        var WinPrint = window.open('', "_blank"),
            loanCalcProps = this.props.loanCalculator,
            data = loanCalcProps.loanData,
            allSum = 0, overPay = 0, overRate = 0;

        //function conv() {toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')};

        for (let item in data) {
            allSum += data[item].monthSum;
        }
        allSum = Math.round(allSum * 100) / 100;
        overPay = Math.round((allSum - loanCalcProps.loanSum) * 100) / 100;
        overRate = Math.round((overPay / loanCalcProps.loanSum * 100) * 100) / 100;

        document.write('<style> td { color: #F40 } </style>');

        WinPrint.document.write("<style> td { font-size: 15px; font-family: 'Open Sans', sans-serif; text-align: left; width: 20% } </style>");
        WinPrint.document.write("<style> th { height: 22px; font-size: 17px; font-family: 'Open Sans', sans-serif; text-align: left; width: 20%; border-bottom: 1px solid black } </style>");

        WinPrint.document.write("<span>Finance-Foundation.ru</span>");
        WinPrint.document.write('<table id="print1">');
        WinPrint.document.write('<tr><td style="border-bottom: 1px solid black">Сумма кредита</td><td style="border-bottom: 1px solid black; text-align: right">' + loanCalcProps.loanSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб.</td></tr>');
        WinPrint.document.write('<tr><td style="border-bottom: 1px solid black">Срок кредитования</td><td style="border-bottom: 1px solid black; text-align: right">' + loanCalcProps.loanTime + ' мес.</td></tr>');
        WinPrint.document.write('<tr><td style="border-bottom: 1px solid black">Процентная ставка</td><td style="border-bottom: 1px solid black; text-align: right">' + loanCalcProps.loanRate + ' %</td></tr>');
        WinPrint.document.write('<tr><td style="border-bottom: 1px solid black">Общая сумма выплат</td><td style="border-bottom: 1px solid black; text-align: right">' + allSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб.</td></tr>');
        WinPrint.document.write('<tr><td style="border-bottom: 1px solid black">Общая переплата</td><td style="border-bottom: 1px solid black; text-align: right">' + overPay.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб.</td></tr>');
        WinPrint.document.write('<tr><td style="border-bottom: 1px solid black">Процент переплаты</td><td style="border-bottom: 1px solid black; text-align: right">' + overRate + ' %.</td></tr>');
        WinPrint.document.write('</table>');

        WinPrint.document.write('<table id="print">');
        WinPrint.document.write('<thead style="display: table-header-group"><tr>')
        WinPrint.document.write("<th>Месяц</th>");
        WinPrint.document.write("<th>Остаток по кредиту</th>");
        WinPrint.document.write("<th class='a'>Проценты</th>");
        WinPrint.document.write("<th>Погашение долга</th>");
        WinPrint.document.write("<th>Ежемесячный платеж</th></tr></thead>");
        WinPrint.document.write("<tbody>");

        for (var item in data) {
            WinPrint.document.writeln();
            WinPrint.document.write('<tr><td>' + data[item].time + '</td>');
            WinPrint.document.write('<td>' + data[item].balanceSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '</td>');
            WinPrint.document.write('<td>' + data[item].monthRate.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '</td>');
            WinPrint.document.write('<td>' + data[item].monthDebt.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '</td>');
            WinPrint.document.write('<td>' + data[item].monthSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + '</td></tr>');
        }
        WinPrint.document.write('</tbody></table>');
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    }

    render() {
        var that = this,
            template,
            loanCalcProps = that.props.loanCalculator,
            data = loanCalcProps.loanData,
            classWhite = 'white',
            classBlack = 'black',
            className, classNone = '';

        if (loanCalcProps.loanType < 2) {
            template = data.map(function (item, index) {
                (index % 2 == 0) ? className = classBlack : className = classWhite;
                return (
                    <tr key={index}>
                        <td className={className}>{item.time}</td>
                        <td className={className}>{item.balanceSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</td>
                        <td className={className}>{item.monthRate.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</td>
                        <td className={className}>{item.monthDebt.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</td>
                        <td className={className}>{item.monthSum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</td>
                    </tr>
                )
            });
        } else {
            classNone = 'none'
        }
        return (
            <div className={'loanData ' + classNone}>
                <h2 className='h2-loan'>ТАБЛИЦА ПЛАТЕЖЕЙ</h2>
                <div className='loanData_block'>
                    <a className='loanData_header_print' onClick={:: that.callPrint} title="Распечатать график платежей"></a>
                <table className='loanData_table'>
                    <tbody >
                        <tr className='loanData_table_head'>
                            <td className='loanData_table_header'>Месяц</td>
                            <td className='loanData_table_header'>Остаток по кредиту</td>
                            <td className='loanData_table_header'>Проценты</td>
                            <td className='loanData_table_header'>Погашение основного долга</td>
                            <td className='loanData_table_header'>Ежемесячный платеж</td>
                        </tr>
                        {template}
                    </tbody>
                </table>
            </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        loanCalculator: state.loanCalculator
    };
}
export default connect(mapStateToProps)(LoanData);