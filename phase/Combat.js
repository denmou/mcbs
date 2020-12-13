const Duel = require('../bean/Duel')
const Card = require('../bean/element/Card')
const Player = require('../bean/Player')

class Combat {
    /**
     * 
     * @param {Duel} duel 
     * @param {number} index 
     */
    run(duel, index) {
        let player = duel.getCurrentPlayer()
        let field = player.getField()
        let item = field.get(index)
        //console.log('回合[' + duel.getTime() + ']: 玩家[' + play.getName() + ']-(' + item.getName() + ')释放技能')
        let target = this.declare(duel, item, index)
        this.beforeInjury()
        this.inInjury(duel, item, target)
        this.afterInjury(duel, item, target)
        this.endInjury()
        return ++index
    }

    /**
     * 
     * @param {Duel} duel 
     * @param {Card} item
     * @param {number} index 
     */
    declare(duel, item, index) {
        let player = duel.getOtherPlayer()
        let field = player.getField()
        let target = field.get(index)
        return target == null ? player : target
    }

    beforeInjury() {}

    /**
     * 
     * @param {Duel} duel 
     * @param {Card} item
     * @param {Card} target 
     */
    inInjury(duel, item, target) {
        let attack = item.attack()
        target.injured(attack)
        if (target instanceof Player) {
            console.log('回合[' + duel.getTime() + ']: 玩家[' + target.getName() +  ']-剩余血量[' + target.getPoint() + ']')
        } else {
            console.log('回合[' + duel.getTime() + ']: 玩家[' + ']-(' + target.getName() + ')剩余血量[' + target.getHp() + ']')
        }
    }

    /**
     * 
     * @param {Duel} duel 
     * @param {Card} item
     * @param {Card} target 
     */
    afterInjury(duel, item, target) {
        if (target instanceof Card && !target.isAlive()) {
            console.log('回合[' + duel.getTime() + ']: 玩家[' + ']-(' + target.getName() + ')阵亡')
        }
    }

    endInjury() {}
}

module.exports = Combat