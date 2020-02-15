class Card {
    constructor(id, name, hp, atk, cd, race, skillList, type) {
        this._id = id;
        this._name = name;
        this._info = {
            hp: hp,
            atk: atk,
            cd: cd,
            race: race,
            skillList: skillList
        };
        this._battle;
        this._type = type;
        this.reset();
    }

    reset() {
        this._battle = {
            hp: this._info.hp,
            atk: this._info.atk,
            cd: this._info.cd,
            race: this._info.race,
            skillList: this._info.skillList,
            state: 0,
            shortBuff: [],
            longBuff: [],
            battleBuff: []
        };
    }

    getName() {
        return this._name;
    }

    isReady() {
        return this._battle.cd == 0;
    }

    getCd() {
        return this._battle.cd;
    }

    /**
     * @param {number} cd
     */
    addCd(cd) {
        this._battle.cd += cd
        if (this._battle.cd < 0) {
            this._battle.cd = 0;
        }
    }

    getState() {
        return this._battle.state;
    }

    actionOver() {
        this._battle.state = -1;
    }

    timeEnd() {
        if (this._battle.state == -1) {
            this._battle.state = 0;
        }
    }

    getAtk() {
        return this._battle.atk;
    }

    getHp() {
        return this._battle.hp;
    }

    damage(value) {
        this._battle.hp -= value;
        return this._battle.hp <= 0
    }

    isCard() {
        return this._type == 0;
    }

    getNumber() {
        return this._info.hp + this._info.atk;
    }
}

module.exports = Card
