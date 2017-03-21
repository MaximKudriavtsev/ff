var month = ['Январь','Февраль','Март','Апрель',
            'Май','Июнь','Июль','Август',
            'Сентябрь','Октябрь','Ноябрь','Декабрь'];

function annMonthDebt(monthSum, monthRate) {
    return (Math.round((monthSum - monthRate)*100)/100)
}

function annMonthRate(balanceSum, loanRate) {
    let monthRate = balanceSum * loanRate / 12;

    return (Math.round(monthRate*100)/100)
}

function annMonthSum(sum, rate, time) {
    var rate12 = rate/12,
        monthSum = sum*rate12*(1+1/(Math.pow(1+rate12, time)-1));
    
    return (Math.round(monthSum*100)/100);
}

//export array of objects of month loan data
export function annData(sum, rate, time) {
    var monthSum = annMonthSum(sum, rate, time),
        balanceSum = sum,
        data = [],
        date = new Date();
    
    for(let i=0; i<time; i++) {
        var monthRate = annMonthRate(balanceSum, rate),
            monthDebt = annMonthDebt(monthSum, monthRate);
        data.push({
            time : month[date.getMonth()] +' '+ date.getFullYear(),
            balanceSum : balanceSum,
            monthRate : monthRate,
            monthDebt : monthDebt,
            monthSum : monthSum
        });
        balanceSum -= monthDebt;
        balanceSum = Math.round(balanceSum*100)/100;
        date.setMonth(date.getMonth() +1 );
    }
    return (data)
}

//export arrey of month loan data
export function diffData(sum, rate, time){
    var monthDebt = Math.round(sum/time*100)/100,
        balanceSum = sum,
        data =[],
        date = new Date();
        
    for(let i=0; i<time; i++) {
        let monthSum = Math.round((monthDebt + (sum-(monthDebt*i))*rate/12)*100)/100,
            monthRate = Math.round((monthSum - monthDebt)*100)/100;
        data.push({
            time : month[date.getMonth()] +' '+ date.getFullYear(),
            monthDebt : monthDebt,
            balanceSum : balanceSum,
            monthSum : monthSum,
            monthRate : monthRate
        });
        balanceSum = Math.round((balanceSum - monthDebt)*100)/100;
        date.setMonth(date.getMonth() +1 );
    }
    return (data)
}