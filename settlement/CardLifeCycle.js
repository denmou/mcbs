/**
 * 卡牌入场
 * @param {*} turnBattler 回合玩家
 * @param {*} nextBattler 下轮玩家
 * @param {*} card 带操作卡牌对象
 */
function enter(turnBattler, nextBattler, card) {
    //触发入场
    //console.log("[" + turnBattler.getName() + "] 入场:" + card.getName())
    turnBattler.back(card, 0);
}

function die(turnBattler, nextBattler, card) {
    //触发阵亡
    //console.log("[" + nextBattler.getName() + "] 阵亡卡牌:" + card.getName())
    if (card) {
        goGraveyard(turnBattler, nextBattler, card);
    }
}

function goGraveyard(turnBattler, nextBattler, card) {
    //console.log("[" + nextBattler.getName() + "] 进入墓地:" + card.getName())
    nextBattler.back(card, 3);
}

module.exports = {
    enter: enter,
    die: die
}