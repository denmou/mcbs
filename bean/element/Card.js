const Properties = require('../../constant/Properties')
const Skill = require('./Skill')

class Card {
    /**
     * 
     * @param {Number} id 
     * @param {String} name 
     * @param {Number} hp 
     * @param {Number} atk 
     * @param {Number} cd 
     * @param {Number} race 
     * @param {Skill} skill 
     * @param {Number} type 
     */
    constructor(id, name, hp, atk, cd, race, skill, type) {
        this.id = id
        this.name = name
        this.type = type
        this.properties = {}
        this.properties[Properties.HP] = parseInt(hp)
        this.properties[Properties.ATK] = parseInt(atk)
        this.properties[Properties.CD] = parseInt(cd)
        this.properties[Properties.RACE] = race
        this.properties[Properties.SKILL] = skill
        this.state = {}
        this.reset()
    }

    reset() {
        this.state[Properties.HP] = this.properties[Properties.HP]
        this.state[Properties.ATK] = this.properties[Properties.ATK]
        this.state[Properties.CD] = this.properties[Properties.CD]
        this.state[Properties.RACE] = this.properties[Properties.RACE]
        this.state[Properties.SKILL] = this.properties[Properties.SKILL]
        this.state[Properties.LIMIT] = 0
        this.state[Properties.SIGN] = []
        this.state[Properties.BUFF] = []
    }

    getName() {
        return this.name
    }

    /**
     * 
     * @param {number} value 
     */
    addCd(value) {
        this.state[Properties.CD] += value
    }

    getCd() {
        return this.state[Properties.CD]
    }

    getAtk() {
        return this.state[Properties.ATK]
    }

    getHp() {
        return this.state[Properties.HP]
    }

    /**
     * 发起攻击
     * @returns {number} 攻击数值
     */
    attack() {
        return this.state[Properties.ATK]
    }

    /**
     * 受到伤害
     * @param {number} value 
     */
    injured(value) {
        this.state[Properties.HP] -= value
    }

    /**
     * 是否存活
     * @returns {boolean} 
     */
    isAlive() {
        return this.state[Properties.HP] > 0
    }
}

module.exports = Card
