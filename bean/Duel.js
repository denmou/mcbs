const Player = require('./Player')
const ItemCollection = require('../method/ItemCollection')

class Duel {
    /**
     * 
     * @param {Player} attacker 
     * @param {Player} defender 
     * @param {ItemCollection} collection 
     */
    constructor(attacker, defender, collection) {
        this.attacker = attacker
        this.defender = defender
        this.collection = collection
        this.time = 1
        this.priority = true
    }

    /**
     * 增加回合数
     * @param {number} value 
     */
    addTime(value) {
        this.time += value
    }

    getTime() {
        return this.time
    }

    /**
     * 交换优先权
     */
    exchange() {
        this.priority = !this.priority
    }

    reset() {
        this.time = 1
        return Promise.all([
            this.attacker.reset(this.collection),
            this.defender.reset(this.collection)
        ]).then(() => {
            this.priority = this.attacker.getPriority() >= this.defender.getPriority()
        })
    }

    getAttacker() {
        return this.attacker
    }

    getDefender() {
        return this.defender
    }

    getCurrentPlayer() {
        return this.priority ? this.attacker : this.defender
    }

    getOtherPlayer() {
        return !this.priority ? this.attacker : this.defender
    }

    getPriority() {
        return this.priority
    }
}

module.exports = Duel