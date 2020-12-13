const Phase = require('./Phase')
const Duel = require('../bean/Duel')
const Point = require('../method/Point')

class EndPhase extends Phase {
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
        //console.log('回合[' + duel.getTime() + ']: 等待区cd结算时点')
        let attacker = duel.getAttacker()
        let defender = duel.getDefender()
        let hand = attacker.getHand()
        for (let i = 0; i < hand.size(); i++) {
            let item = hand.get(i)
            item.addCd(-1)
            console.log('回合[' + duel.getTime() + ']: 玩家[' + attacker.getName() + ']-(' + item.getName() + ')cd-1')
        }
        hand = defender.getHand()
        for (let i = 0; i < hand.size(); i++) {
            let item = hand.get(i)
            item.addCd(-1)
            console.log('回合[' + duel.getTime() + ']: 玩家[' + defender.getName() + ']-(' + item.getName() + ')cd-1')
        }
    }

    /**
     * 
     * @param {Duel} duel 
     */
    end(duel) {
        //console.log('回合[' + duel.getTime() + ']: 英雄生命值清算')
        let player = duel.getCurrentPlayer()
        let point = Point.getRoundPoint(duel.getTime())
        player.addPoint(-point)
        if (point > 0) {
            console.log('回合[' + duel.getTime() + ']: 玩家[' + player.getName() + ']-受到(' 
            + point + ')回合伤害，当前生命值[' + player.getPoint() + ']')
        }
        duel.addTime(1)
        duel.exchange()
    }
}

module.exports = EndPhase