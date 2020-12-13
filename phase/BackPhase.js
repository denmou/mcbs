const Phase = require('./Phase')

class BackPhase extends Phase {
    constructor() {
        super()
    }

    start(duel) {
    }

    working(duel) {
        //console.log('回合[' + duel.getTime() + ']: 遗志时点')
    }

    end(duel) {
    }
}

module.exports = BackPhase