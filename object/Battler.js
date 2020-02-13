function Battler(level) {
    var point = {
        1: {
            point: 1000,
            per: 70
        },
        2: {
            point: 1800,
            per: 80
        },
        3: {
            point: 4000,
            per: 90
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
    let n = Math.floor((level - 1) / 10)
    let m = (level - 1) % 10
    //_point = 1000 + 600 * n + (1 + n) * n * 100 + (70 + 10 * n) * m
    if (point[n].array) {
        _point = point[n].array[m]
    } else {
        _point = point[n].point + point[n].per * m
    }
    var _point;
    var _equipList;
    var _runeList;
    var _contractList;
    var _cardList;
    var _wait;
    var _battle;
    var _graveyard;
    var _exception;
}

module.exports = Battler
