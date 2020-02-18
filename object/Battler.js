const Point = require("./item/Point")
const Equip = require("./Equip")
const Rune = require("./Rune")
const Contract = require("./Contract")
const Card = require("./Card")

class Battler {
    /**
     * 
     * @param {string} name
     * @param {number} level 
     * @param {Equip[]} equipList 
     * @param {Rune[]} runeList 
     * @param {Contract[]} contractList 
     * @param {Card[]} cardList 
     * @param {boolean} order 
     */
    constructor(name, level, cardList = [], runeList = [], contractList = [], equipList = [], order = true) {
        this.name = name;
        this.level = level;
        this.equipList = equipList;
        this.runeList = runeList;
        this.contractList = contractList;
        this.cardList = cardList;
        this.order = order;
        this.reset();
    }

    reset () {
        this._point = Point.getPoint(this.level);
        this._equipList = [];
        for (const equip of this.equipList) {
            this._point += equip.getPoint();
            this._equipList.push(equip);
        }
        this._runeList = [];
        for (const rune of this.runeList) {
            this._runeList.push(rune);
        }
        this._contractList = [];
        for (const contract of this.contractList) {
            this._contractList.push(contract);
        }
        this._cardList = [];
        for (const card of this.cardList) {
            card.reset();
            this._cardList.push(card);
        }
        if (this.order) {
            this._cardList.sort(() => Math.random() > .5 ? -1 : 1)
        }
        this._wait = [];
        this._battle = [];
        this._graveyard = [];
        this._exception = [];
        this._maxWait = 5;
    }

    getName() {
        return this.name;
    }

    /**
     * @returns {number} point
     */
    getPoint() {
        return this._point;
    }

    hurt(value) {
        this._point -= value;
    }

    draw() {
        if (this._wait.length < this._maxWait && this._cardList.length > 0) {
            const card = this._cardList.shift();
            this._wait.push(card);
            return card;
        }
        return null;
    }

    /**
     * 从等待区获取一张已就绪卡牌
     * @returns {Card} readyCard 等待登场卡牌
     */
    getReadyCard() {
        for (const i in this._wait) {
            if (this._wait[i].isReady()) {
                return this._wait.splice(i, 1)[0];
            }
        }
        return null;
    }

    /**
     * 从场上获取下一张行动卡牌序号
     * @returns {number} index
     */
    getActionCard() {
        for (const i in this._battle) {
            if (this._battle[i].getState() >= 0) {
                this._battle[i].actionOver();
                return i;
            }
        }
        return -1;
    }

    timeEnd() {
        for (const card of this._battle) {
            card.timeEnd();
        }
    }

    /**
     * cd整理（等待区）
     */
    advance() {
        for (const card of this._wait) {
            card.addCd(-1);
        }
        return this._wait.length > 0
    }

    /**
     * @param {number} position 0:场上; 1:等待区; 2:牌堆; 3:墓地
     * @param {number} index -1:根据condition查找; other:数组下标
     * @param {function} condition 
     * @returns {number} index
     */
    getCardIndex(position, index, condition) {
        let array;
        switch (position) {
            case 0:
                array = this._battle;
                break;
            case 1:
                array = this._wait;
                break;
            case 2:
                array = this._cardList;
                break;
            case 3:
                array = this._graveyard;
                break;
            default:
                break;
        }
        if (array && array.length > 0) {
            if (index < 0 && condition) {
                index = -1;
                for (const i in array) {
                    if (condition(array[index], array[i])) {
                        index = i;
                    }
                }
            }
        } else {
            index = -1;
        }
        return Number.parseInt(index);
    }

    getCard(position, index, remove = false) {
        if (index > -1) {
            let array;
            switch (position) {
                case 0:
                    array = this._battle;
                    break;
                case 1:
                    array = this._wait;
                    break;
                case 2:
                    array = this._cardList;
                    break;
                case 3:
                    array = this._graveyard;
                    break;
                default:
                    break;
            }
            if (array && array.length > index) {
                if (remove) {
                    return array.splice(index, 1)[0];
                } else {
                    return array[index];
                }
            }
        }
        return null;
    }

    /**
     * 卡牌返回指定位置
     * @param {Card} card
     * @param {number} position 0:场上; 1:等待区; 2:牌堆; 3:墓地
     */
    back(card, position) {
        if(position > 0) {
            card.reset();
        }
        switch (position) {
            case 0:
                this._battle.push(card)
                break;
            case 1:
                if (this._wait.length < this._maxWait) {
                    this._wait.push(card)
                } else {
                    this._cardList.unshift(card)
                }
                break;
            case 2:
                this._cardList.unshift(card)
                break;
            case 3:
                this._graveyard.push(card)
                break;
            default:
                break;
        }
    }

    isLose() {
        return this._point <= 0 || (this._cardList.length <= 0 && this._battle.length <= 0 && this._wait.length <= 0)
    }

    getSuperiority() {
        let value = this._point;
        if (this._cardList) {
            for (const item of this._cardList) {
                value += item.getNumber();
            }
        }
        if (this._contractList) {
            for (const item of this._contractList) {
                value += item.getNumber();
            }
        }
        return value;
    }
}

module.exports = Battler
