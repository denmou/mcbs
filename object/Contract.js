const Card = require("./Card")

class Contract extends Card {
    constructor(id, name, hp, atk, cd, race, skillList) {
        super(id, name, hp, atk, cd, race, skillList, 1);
        this._condition = {
            slide: 0,
            type: 0,
            compare: 0,
            race: 0,
            value: 0
        }
    }
}

module.exports = Contract