import { annData, diffData } from '../func/loanCalc'


const initialState = {
    loanSum: 1000000,
    loanTime: 36,
    loanRate: 16,
    loanType: 0, //0 - ann, 1 - diff, 2 - free
    loanData: annData(1000000, 0.16, 36),
    chart: true
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_RATE':
            {
                var func;
                switch(state.loanType) {
                    case 0: { func = (sum, rate, time) => annData(sum, rate, time); break; }
                    case 1: { func = (sum, rate, time) => diffData(sum, rate, time); break; }
                    default: null;
                }
                switch (action.number) {
                    case 1:{
                        return { ...state, loanSum: action.value, loanData: func(action.value, state.loanRate/100, state.loanTime), chart: action.chart }
                    }
                    case 2:{
                        return { ...state, loanTime: action.value, loanData: func(state.loanSum, state.loanRate/100, action.value), chart: action.chart }
                    }
                    case 3:{
                        return { ...state, loanRate: action.value, loanData: func(state.loanSum, action.value/100, state.loanTime), chart: action.chart }
                    }
                    case 4:{
                        return { ...state, loanType: action.value, loanData: func(state.loanSum, state.loanRate/100, state.loanTime), chart: action.chart }
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
        case 'CHANGE_TYPE': {
            switch(action.number*1) {
                case 0:{
                    return {...state, loanData: annData(state.loanSum, state.loanRate/100, state.loanTime), loanType: 0 }
                }
                case 1:{
                    return {...state, loanData: diffData(state.loanSum, state.loanRate/100, state.loanTime), loanType: 1 }
                }
                default:
                    return state;
            }
        }

        default:
            return state
    }
}