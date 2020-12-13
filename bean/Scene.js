const Duel = require('./Duel')
const Round = require('./Round')

class Scene {
    /**
     * 
     * @param {Duel} duel 
     */
    constructor(duel) {
        this.duel = duel
        this.round = new Round()
    }

    async run() {
        await this.duel.reset()
        while(this.duel.getAttacker().isAlive() && this.duel.getDefender().isAlive()) {
            this.round.run(this.duel)
        }
        return this.duel.getAttacker().isAlive() ? 1 : 0
    }
}

module.exports = Scene