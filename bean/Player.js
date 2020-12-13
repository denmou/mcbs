const Point = require('../method/Point')
const CardItem = require('./item/CardItem')
const Card = require('./element/Card')
const Space = require('./Space')

class Player {
    /**
     * 
     * @param {string} name
     * @param {number} level 
     * @param {CardItem[]} cards 
     * @param {boolean} order 
     */
    constructor(name, level, cards = [], order = true) {
        this.name = name
        this.level = level
        this.cards = cards
        this.order = order
        this.priority = 0
    }

    /**
     * 
     * @param {ItemCollection} collection 
     */
    async reset(collection) {
        this.priority = 0
        this.point = Point.getValue(this.level)
        this.heap = new Space()
        for (let card of this.cards) {
            let item = await collection.createCard(card.getId(), card.getLevel(), card.getSkills())
            this.heap.add(item)
            this.priority += item.getAtk() + item.getHp()
        }
        this.hand = new Space()
        this.field = new Space()
        this.grave = new Space()
        this.extra = new Space()
        this.banish = new Space()
    }

    getName() {
        return this.name
    }

    getHeap() {
        return this.heap
    }

    getHand() {
        return this.hand
    }

    getField() {
        return this.field
    }

    getGrave() {
        return this.grave
    }

    getExtra() {
        return this.extra
    }

    getBanish() {
        return this.banish
    }

    /**
     * 
     * @param {number} value 
     */
    addPoint(value) {
        this.point += value
        if (this.point < 0) {
            this.point = 0
        }
    }

    getPoint() {
        return this.point
    }

    isAlive() {
        return this.point > 0 && (!this.heap.isEmpty() || !this.hand.isEmpty() || !this.field.isEmpty())
    }

    getPriority() {
        return this.priority
    }

    getOrder() {
        return this.order
    }

    /**
     * 受到伤害
     * @param {number} value 
     */
    injured(value) {
        this.point -= value
    }
}

module.exports = Player