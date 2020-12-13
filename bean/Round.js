const Duel = require('./Duel')
const DrawPhase = require('../phase/DrawPhase')
const StandbyPhase = require('../phase/StandbyPhase')
const FrontPhase = require('../phase/FrontPhase')
const BattlePhase = require('../phase/BattlePhase')
const BackPhase = require('../phase/BackPhase')
const EndPhase = require('../phase/EndPhase')

class Round {
    constructor() {
        this.drawPhase = new DrawPhase()
        this.standbyPhase = new StandbyPhase()
        this.frontPhase = new FrontPhase()
        this.battlePhase = new BattlePhase()
        this.backPhase = new BackPhase()
        this.endPhase = new EndPhase()
    }

    /**
     * 执行回合流程
     * 
     * @param {Duel} duel
     */
    run(duel) {
        this.drawPhase.run(duel)
        this.standbyPhase.run(duel)
        this.frontPhase.run(duel)
        this.battlePhase.run(duel)
        this.backPhase.run(duel)
        this.endPhase.run(duel)
    }
}

module.exports = Round