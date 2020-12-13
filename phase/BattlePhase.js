const Phase = require('./Phase')
const Combat = require('./Combat')
const Duel = require('../bean/Duel')

class BattlePhase extends Phase {
    constructor() {
        super()
        this.combat = new Combat()
    }

    start(duel) {
        //console.log('回合[' + duel.getTime() + ']: 降临时点')
    }

    /**
     * 
     * @param {Duel} duel 
     */
    working(duel) {
        let player = duel.getCurrentPlayer()
        let field = player.getField()
        let index = 0
        while (index < field.size()) {
            index = this.combat.run(duel, index)
        }
    }

    /**
     * 
     * @param {Duel} duel 
     */
    end(duel) {
        //console.log('回合[' + duel.getTime() + ']: 整理战局')
    }
}

module.exports = BattlePhase