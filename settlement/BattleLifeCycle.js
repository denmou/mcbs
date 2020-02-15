const HeroPoint = require("./HeroPoint")
const CardLifeCycle = require("./CardLifeCycle")

/**
 * 
 * @param {*} turnBattler 
 * @param {*} nextBattler 
 * @param {number} index
 */
function start(turnBattler, nextBattler, index) {
    let attackCardIndex = turnBattler.getCardIndex(0, index);
    let attackCard = turnBattler.getCard(0, attackCardIndex);
    //触发选取攻击对象
    let defendCardIndexArray = []
    let defendCardIndex = nextBattler.getCardIndex(0, index);
    if (defendCardIndex > -1) {
        defendCardIndexArray.push(defendCardIndex);
    }
    if (defendCardIndexArray.length > 0) {
        //触发攻击卡牌
        for (const itemIndex of defendCardIndexArray) {
            let itemCard = nextBattler.getCard(0, itemIndex);
            if (itemCard) {
                let dead = itemCard.damage(attackCard.getAtk());
                //console.log("[" + attackCard.getName() + "]攻击[" + itemCard.getName() + "]: 剩余[" + itemCard.getHp() + "]");
                if (dead) {
                    itemCard = nextBattler.getCard(0, itemIndex, true);
                    CardLifeCycle.die(turnBattler, nextBattler, itemCard);
                }
            }
        }
    } else {
        //触发攻击英雄
        //console.log("[" + attackCard.getName() + "]攻击英雄[" + nextBattler.getName() + "]");
        HeroPoint.damageProcess(turnBattler, nextBattler, attackCard.getAtk());
    }
}

function cardHurtBefore() {

}

function cardHurtDamage() {

}

function cardHurtAfter() {

}

module.exports = {
    start: start
}