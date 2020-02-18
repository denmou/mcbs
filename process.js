const Battler = require("./object/Battler")
const Card = require("./object/Card")

const HeroPoint = require("./settlement/HeroPoint")
const CardLifeCycle = require("./settlement/CardLifeCycle")
const BattleLifeCycle = require("./settlement/BattleLifeCycle")

const InfoRequest = require("./request/InfoRequest");

/**
 * 
 * @param {Battler} attacker 
 * @param {Battler} defender 
 */
function battle(attacker, defender) {
    attacker.reset();
    defender.reset();
    let priority = attacker.getSuperiority() >= defender.getSuperiority();
    let turnBattler = priority ? attacker : defender;
    let nextbattler = priority ? defender : attacker;
    let turn = 0;
    while (!(attacker.isLose() || defender.isLose())) {
        turn++;
        //console.log("回合[" + turn + "]");
        let turnDamage = HeroPoint.getTurnDamage(turn);
        if (turnDamage > 0) {
            HeroPoint.onlyDamage(turnBattler, turnDamage);
        }
        //回合开始阶段-双方等待时间-1
        let ta = turnBattler.advance();
        let na = nextbattler.advance();
        //抽开阶段-回合玩家抽卡
        let drawCard = turnBattler.draw();
        if (drawCard) {
            console.log("[" + turnBattler.getName() + "] 抽到卡牌:" + drawCard.getName());
        }
        //主要阶段-卡牌登场
        let readyCard = turnBattler.getReadyCard();
        while (readyCard) {
            CardLifeCycle.enter(turnBattler, nextbattler, readyCard)
            readyCard = turnBattler.getReadyCard();
        }
        //战斗阶段
        let actionIndex = turnBattler.getActionCard();
        while (actionIndex > -1) {
            BattleLifeCycle.start(turnBattler, nextbattler, actionIndex);
            actionIndex = turnBattler.getActionCard();
        }
        //结束阶段
        turnBattler.timeEnd();
        let t = nextbattler;
        nextbattler = turnBattler;
        turnBattler = t;
    }
    //console.log("战斗结束，攻击者战斗结果:" + !attacker.isLose());
    return !attacker.isLose();
}

var time = new Date().getTime();
var win = 0;
let list = []
let list2 = []
for (let i = 0; i < 10; i++) {
    list.push(new Card("a_" + i, "进攻_" + i, i * 200, i * 150, 4, 1, []));
    list2.push(new Card("d_" + i, "防守_" + i, i * 200, i * 150, 4, 1, []));
}
let attacker = new Battler("进攻者", 10, list);
let defender = new Battler("防御者", 10, list2);
for (let n = 0; n < 1; n++) {
    let result = battle(attacker, defender);
    console.log("[" + n + "]战斗结束，攻击者战斗结果:" + result);
    if (result) {
        win++;
    }
}
console.log("End, use time: " + (new Date().getTime() - time) + ", win: " + win);
