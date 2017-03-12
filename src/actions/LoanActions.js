export function changeRate(value, number, chart) {
    return {
        type: 'CHANGE_RATE',
        value: value,
        number: number,
        chart: chart
    }
}

export function changeData(data) {
    return {
        type: 'CHANGE_DATA',
        data: data
    }
}

export function changeChart() {
    return { type: 'CHANGE_CHART' }
}