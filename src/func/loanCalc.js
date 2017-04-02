var month = ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function annMonthDebt(monthSum, monthRate) {
    return (Math.round((monthSum - monthRate) * 100) / 100)
}

function annMonthRate(balanceSum, loanRate) {
    let monthRate = balanceSum * loanRate / 12;

    return (Math.round(monthRate * 100) / 100)
}

function annMonthSum(sum, rate, time) {
    var rate12 = rate / 12,
        monthSum = sum * rate12 * (1 + 1 / (Math.pow(1 + rate12, time) - 1));

    return (Math.round(monthSum * 100) / 100);
}

//export array of objects of month loan data
export function annData(sum, rate, time) {
    var monthSum = annMonthSum(sum, rate, time),
        balanceSum = sum,
        data = [],
        date = new Date();

    for (let i = 0; i < time; i++) {
        var monthRate = annMonthRate(balanceSum, rate),
            monthDebt = annMonthDebt(monthSum, monthRate);
        data.push({
            time: month[date.getMonth()] + ' ' + date.getFullYear(),
            balanceSum: balanceSum,
            monthRate: monthRate,
            monthDebt: monthDebt,
            monthSum: monthSum
        });
        balanceSum -= monthDebt;
        balanceSum = Math.round(balanceSum * 100) / 100;
        date.setMonth(date.getMonth() + 1);
    }
    return (data)
}

//export arrey of month loan data
export function diffData(sum, rate, time) {
    var monthDebt = Math.round(sum / time * 100) / 100,
        balanceSum = sum,
        data = [],
        date = new Date();

    for (let i = 0; i < time; i++) {
        let monthSum = Math.round((monthDebt + (sum - (monthDebt * i)) * rate / 12) * 100) / 100,
            monthRate = Math.round((monthSum - monthDebt) * 100) / 100;
        data.push({
            time: month[date.getMonth()] + ' ' + date.getFullYear(),
            monthDebt: monthDebt,
            balanceSum: balanceSum,
            monthSum: monthSum,
            monthRate: monthRate
        });
        balanceSum = Math.round((balanceSum - monthDebt) * 100) / 100;
        date.setMonth(date.getMonth() + 1);
    }
    return (data)
}

//export array of month loan data
export function freeData(sum, rate, time, loanData) {
    var data = [], whiteSum = 0, blackSum = 0, monthSum = 0,
        onePlusRate = 1 + rate,
        date = new Date(), i;

    debugger;
    //first start with length = 0
    if (loanData.length == 0/* || loanData.length != time*/) {
        loanData = [];
        for (i = 0; i < time; i++) {
            loanData.push({
                monthSum: 0,
                show: false
            });
            blackSum += 1 / Math.pow(onePlusRate, (i + 1) / 12);
        }
        monthSum = Math.round(((sum - whiteSum) / blackSum) * 100) / 100;
    } else {
        //new
        //if length != time
        if (loanData.length != time) {
            var loanData2 = [];
            for (i = 0; i < time; i++) {
                var isData = loanData[i];
                loanData2.push({
                    monthSum: isData ? isData.monthSum : 0,
                    show: isData ? isData.show : false
                });
                if (loanData2[i].show)
                    whiteSum += loanData2[i].monthSum / Math.pow(onePlusRate, (i + 1) / 12);
                else
                    blackSum += 1 / Math.pow(onePlusRate, (i + 1) / 12);
            }
            monthSum = Math.round(((sum - whiteSum) / blackSum) * 100) / 100;
            loanData = loanData2;
        } else {
            // new end
            //if length == time, refresh monthSum
            for (i = 0; i < time; i++) {
                if (loanData[i].show)
                    whiteSum += loanData[i].monthSum / Math.pow(onePlusRate, (i + 1) / 12);
                else
                    blackSum += 1 / Math.pow(onePlusRate, (i + 1) / 12);
            }
            monthSum = Math.round(((sum - whiteSum) / blackSum) * 100) / 100;
        }
    }

    for (i = 0; i < time; i++) {
        var isShow = loanData[i].show;

        data.push({
            time: month[date.getMonth()] + ' ' + date.getFullYear(),
            monthSum: isShow ? loanData[i].monthSum * 1 : monthSum,
            show: isShow
        });
        date.setMonth(date.getMonth() + 1);
    }
    return data;
}