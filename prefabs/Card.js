const Heath = require('../components/Health')
const Combat = require('../components/Combat')
const Work = require('../components/Work')
const Cd = require('../components/Cd')

class Card {
    constructor(inst, guid) {
        this.inst = inst
        this.guid = guid
        this.info = {}
        this.heath = null
        this.combat = null
        this.work = new Work(this)
        this.cd = null
    }

    setInfo(atk, hp, cd, race, skills) {
        this.info.atk = atk
        this.info.hp = hp
        this.info.cd = cd
        this.info.race = race
        this.info.skills = skills
    }

    onLoad() {
        this.heath = new Heath(this, this.info.hp)
        this.combat = new Combat(this, this.info.atk)
        this.cd = new Cd(this, this.info.cd)
        this.work.setWorkFn(() => {
            console.log('test word')
        })
    }

    onSpawn() {

    }

    onDead() {
        this.heath = new Heath(this, this.info.hp)
        this.combat = new Combat(this, this.info.atk)
        this.cd = new Cd(this, this.info.cd)
    }
}

module.exports = Card