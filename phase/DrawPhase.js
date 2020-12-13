const Phase = require('./Phase')
const Duel = require('../bean/Duel')

class DrawPhase extends Phase {
    constructor() {
        super()
    }

    start(duel) {
        //console.log('回合[' + duel.getTime() + ']: 契约时点')
    }

    /**
     * 
     * @param {Duel} duel 
     */
    working(duel) {
        let play = duel.getCurrentPlayer()
        let heap = play.getHeap()
        let hand = play.getHand()
        if (!heap.isEmpty() && hand.size() < 5) {
            let index = play.getOrder() ? 0 : Math.floor(Math.random() * heap.size())
            let items = heap.remove(index)
            if (items.length > 0) {
                let item = items[0]
                hand.add(item)
                console.log('回合[' + duel.getTime() + ']: 玩家[' + play.getName() + ']-抽卡(' + item.getName() + ')')
            }
        }
    }

    end(duel) {
        //console.log('回合[' + duel.getTime() + ']: 急护时点')
    }
}

module.exports = DrawPhase