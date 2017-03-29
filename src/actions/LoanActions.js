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

export function changeType(num) {
    return {
        type: 'CHANGE_TYPE',
        number: num
    }
}

export function  changeFreeData(id, val, sh) {
    return {
        type: 'CHANGE_FREE_DATA',
        index: id,
        value: val,
        show : sh
    }
}