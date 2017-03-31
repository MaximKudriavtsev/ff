import React, { Component } from 'react'
const { PropTypes } = React;
import { connect } from "react-redux"

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const CustomTooltip = React.createClass({
    propTypes: {
        type: PropTypes.string,
        payload: PropTypes.array,
        label: PropTypes.string
    },
    render() {
        const { active } = this.props;

        if (active) {
            const { payload } = this.props;
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].payload.time}`}</p>
                    <p className="introC">{`Платеж : ${(Math.round((payload[0].value + payload[1].value) * 100) / 100).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`}</p>
                    <p className="introA">{`Долг : ${payload[0].value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`}</p>
                    <p className="introB">{`Проценты : ${payload[1].value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`}</p>
                </div>
            );
        }
        return null;
    }
});

const CustomTooltipFree = React.createClass({
    propTypes: {
        type: PropTypes.string,
        payload: PropTypes.array,
        label: PropTypes.string
    },
    render() {
        const { active } = this.props;

        if (active) {
            const { payload } = this.props;
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].payload.time}`}</p>
                    <p className="introC">{`Платеж : ${(Math.round((payload[0].value + payload[1].value) * 100) / 100).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}`}</p>
                </div>
            );
        }
        return null;
    }
});


class LoanChart extends Component {
    chartProperty(clientWidth) {
        if (clientWidth >= 1400) {
            return {
                width: clientWidth * 0.7,
                height: 450
            }
        }
        if (clientWidth >= 990) {
            return {
                width: clientWidth * 0.8,
                height: 450
            }
        }
        if (clientWidth < 990) {
            return {
                width: clientWidth * 0.85,
                height: 400
            }
        }
    }

    render() {
        var that = this,
            loanData,
            chartProp = that.chartProperty(document.documentElement.clientWidth);

        that.props.loanCalculator.chart ? loanData = that.props.loanCalculator.loanData : loanData = [];
        if (that.props.loanCalculator.loanType < 2) {
            return (
                <div className='loanChart' id='loanChart'>
                    <h2 className='h2-loan'>СООТНОШЕНИЕ ПРОЦЕНТОВ И ОСНОВНОГО ДОЛГА В ЕЖЕМЕСЯЧНЫХ ПЛАТЕЖАХ</h2>
                    <div className='loanChart_chartBox'>
                        <BarChart width={chartProp.width} height={chartProp.height} data={loanData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="monthDebt" stackId="a" fill="#5CCCCC" isAnimationActive={true} />
                            <Bar dataKey="monthRate" stackId="a" fill="#FF7D7D" isAnimationActive={true} />
                        </BarChart>
                    </div>
                </div>
            )
        } else {
            var data = [];
            loanData.forEach(function(item) {
                data.push({
                    time : item.time,
                    monthSumFalse : item.show ? 0 : item.monthSum,
                    monthSumTrue : item.show ? item.monthSum : 0
                });
            });
            return (
                <div className='loanChart' id='loanChart'>
                    <h2 className='h2-loan'>СООТНОШЕНИЕ ПРОЦЕНТОВ И ОСНОВНОГО ДОЛГА В ЕЖЕМЕСЯЧНЫХ ПЛАТЕЖАХ</h2>
                    <div className='loanChart_chartBox'>
                        <BarChart width={chartProp.width} height={chartProp.height} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip content={<CustomTooltipFree />} />
                            <Bar dataKey="monthSumFalse" stackId="a" fill="#5CCCCC" isAnimationActive={true} />
                            <Bar dataKey="monthSumTrue" stackId="a" fill="#FF7D7D" isAnimationActive={true} />
                        </BarChart>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        loanCalculator: state.loanCalculator
    };
}
export default connect(mapStateToProps)(LoanChart);