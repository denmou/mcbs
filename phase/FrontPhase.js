const Phase = require('./Phase')

class FrontPhase extends Phase {
    constructor() {
        super()
    }

    start(duel) {
    }

    working(duel) {
        //console.log('回合[' + duel.getTime() + ']: 符文时点')
        //console.log('回合[' + duel.getTime() + ']: 先机时点')
        //console.log('回合[' + duel.getTime() + ']: 装备技能时点')
    }

    end(duel) {
    }
}

module.exports = FrontPhase