const Phase = require('./Phase')
const Duel = require('../bean/Duel')

class StandbyPhase extends Phase {
    constructor() {
        super()
    }

    start(duel) {
    }

    /**
     * 
     * @param {Duel} duel 
     */
    working(duel) {
        let play = duel.getCurrentPlayer()
        let hand = play.getHand()
        for (let i = 0; i < hand.size(); i++) {
            let item = hand.get(i)
            if (item.getCd() <= 0) {
                let items = hand.remove(i)
                if (items.length > 0) {
                    play.getField().add(items[0])
                    console.log('回合[' + duel.getTime() + ']: 玩家[' + play.getName() + ']-(' + item.getName() + ')上场')
                }
            }
        }
    }

    end(duel) {
    }
}

module.exports = StandbyPhase