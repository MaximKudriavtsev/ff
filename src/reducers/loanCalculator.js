import { annData } from '../func/loanCalc'


const initialState = {
    loanSum: 1000000,
    loanTime: 36,
    loanRate: 16,
    loanType: 'a',
    loanData: annData(1000000, 0.16, 36),
    chart: true
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_RATE':
            {
                switch (action.number) {
                    case 1:{
                        let newData = annData(action.value, state.loanRate/100, state.loanTime);
                        console.log(action);
                        return { ...state, loanSum: action.value, loanData: newData, chart: action.chart }
                    }
                    case 2:{
                        let newData = annData(state.loanSum, state.loanRate/100, action.value);
                        return { ...state, loanTime: action.value, loanData: newData, chart: action.chart }
                    }
                    case 3:{
                        let newData = annData(state.loanSum, action.value/100, state.loanTime);
                        return { ...state, loanRate: action.value, loanData: newData, chart: action.chart }
                    }
                    case 4:{
                        let newData = annData(state.loanSum, state.loanRate/100, state.loanTime);
                        return { ...state, loanType: action.value, loanData: newData, chart: action.chart }
                    }
                    default:
                        return state
                }
            }
        case 'CHANGE_DATA':
            return { ...state, loanData: action.data, chart: false}

        case 'CHANGE_CHART': {
            return { ...state, chart: true}
        }

        default:
            return state
    }
}