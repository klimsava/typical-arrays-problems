
exports.min = function min (array) {
    return array !== undefined && array.length > 0 ? array.reduce((min, number) => {
        if (min > number) {
            min = number;
        }

        return min;
    }, 0) : 0;
}

exports.max = function max (array) {
    return array !== undefined && array.length > 0 ? array.reduce((max, number) => {
        if (max < number) {
            max = number;
        }

        return max;
    }, 0) : 0;
}

exports.avg = function avg (array) {
    return array !== undefined && array.length > 0 ? array.reduce((summ, number) => {
        return summ + number;
    }, 0) / array.length : 0;
}
