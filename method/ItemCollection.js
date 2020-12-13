const Card = require('../bean/element/Card')
const InfoRequest = require('../request/InfoRequest')

class CardCollection {
    /**
     * 
     * @param {string} server 
     */
    constructor(server) {
        this.server = server
        this.map = new Map()
    }

    /**
     * 
     * @param {number} id 
     * @param {number} level 
     * @param {number[]} skills 
     * @returns {Card}
     */
    async createCard(id, level, skills) {
        let type = 'card'
        let key = this.getKey(id, type)
        let data = this.map.get(key)
        if (!data) {
            data = await this.getItem(id, type)
        }
        if (!data) {
            return null
        }
        let cardSkills = []
        if (data.Skill) {
            cardSkills.push(data.Skill)
        }
        if (data.LockSkill1) {
            cardSkills.push(data.LockSkill1)
        }
        if (data.LockSkill2) {
            cardSkills.push(data.LockSkill2)
        }
        for (let skill of skills) {
            cardSkills.push(skill)
        }
        let card = new Card(
            data.CardId, 
            data.CardName, 
            data.HpArray[level], 
            data.AttackArray[level], 
            data.Wait, 
            data.Race, 
            cardSkills,
            0
        )
        return card
    }

    /**
     * 
     * @param {number} id 
     */
    async getItem(id, type) {
        let key = this.getKey(id, type)
        if (this.map.has(key)) {
            return this.map.get(key)
        }
        let data = await InfoRequest.requestData(this.server, type, id)
        console.log(data)
        if (data) {
            this.map.set(key, data)
        }
        return data
    }

    getKey(id, type) {
        return type + id
    }
}

module.exports = CardCollection