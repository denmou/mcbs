const point = {
    0: {
        point: 1000,
        per: 70
    },
    1: {
        point: 1800,
        per: 80
    },
    2: {
        point: 2800,
        per: 90
    },
    3: {
        point: 4000,
        per: 100
    },
    4: {
        point: 5400,
        per: 110
    },
    5: {
        point: 7000,
        per: 120
    },
    6: {
        point: 8800,
        per: 130
    },
    7: {
        point: 10800,
        per: 140
    },
    8: {
        point: 13000,
        per: 180
    },
    9: {
        point: 15700,
        per: 220
    },
    10: {
        point: 18900,
        per: 300
    },
    11: {
        point: 23000,
        per: 380
    },
    12: {
        array: [26800, 27100, 27500, 27800, 28200, 28500, 28900, 29500, 29800, 30500]
    },
    13: {
        point: 30800,
        per: 300
    },
    14: {
        point: 34500,
        per: 1000
    }
}

/**
 * 
 * @param {number} level 
 * @returns {number} point
 */
function getValue(level) {
    let n = Math.floor((level - 1) / 10)
    let m = (level - 1) % 10
    //_point = 1000 + 600 * n + (1 + n) * n * 100 + (70 + 10 * n) * m
    if (point[n].array) {
        return point[n].array[m]
    } else {
        return point[n].point + point[n].per * m
    }
}

/**
 * 
 * @param {number} time 
 */
function getRoundPoint(time) {
    if (time <= 50) {
        return 0
    } else if (time <= 100) {
        return 50 + (time - 50 - 1) * 30
    } else {
        return 1520 + (time - 100) * 100
    }
}

module.exports = {
    getValue: getValue,
    getRoundPoint: getRoundPoint
}