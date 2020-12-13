const Properties = require('../../constant/Properties')
const Skill = require('./Skill')

class Rune {
    /**
     * 
     * @param {Number} id 
     * @param {String} name 
     * @param {Number} time 
     * @param {Skill} skill 
     * @param {Number} slide 
     * @param {Number} type 
     * @param {Number} race 
     * @param {Number} color 
     * @param {Number} compare 
     * @param {Number} value 
     */
    constructor(id, name, time, skill, slide, type, race, color, compare, value) {
        this.id = id
        this.name = name
        this.time = time
        this.properties = {}
        this.properties[Properties.TIME] = time
        this.properties[Properties.SKILL] = skill
        this.properties = {}
        this.condition = {}
        this.condition[Properties.SLIDE] = slide
        this.condition[Properties.TYPE] = type
        this.condition[Properties.RACE] = race
        this.condition[Properties.COLOR] = color
        this.condition[Properties.COMPARE] = compare
        this.condition[Properties.VALUE] = value
        this.state = {}
        this.reset()
    }

    reset() {
        this.state[Properties.TIME] = this.properties[Properties.TIME]
        this.state[Properties.SKILL] = this.properties[Properties.SKILL]
    }
}

module.exports = Rune