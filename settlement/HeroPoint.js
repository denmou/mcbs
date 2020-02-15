/**
 * 计算回合伤害值
 * @param {number} turn 
 * @returns {number} value
 */
function getTurnDamage(turn) {
    if (turn > 50) {
        if (turn > 100) {
            return 1520 + (turn - 99) * 100;
        } else {
            return 50 + (turn - 50) * 30;
        }
    }
    return 0;
}

/**
 * 英雄血量伤害（不进入伤害流程）
 * @param {*} battler 
 * @param {*} value 伤害值
 */
function onlyDamage(battler, value) {
    battler.hurt(value);
    console.log("[" + battler.getName() + "] 收到回合伤害:" + value + ", 剩余:" + battler.getPoint());
}

/**
 * 英雄血量伤害流程
 * @param {*} attacker 攻击方
 * @param {*} defender 被攻击方
 * @param {*} value 伤害值
 */
function damageProcess(attacker, defender, value) {
    //结算前流程
    //console.log("[" + defender.getName() + "] 收到伤害:" + value + ", 剩余:" + defender.getPoint());
    defender.hurt(value);
}

module.exports = {
    getTurnDamage: getTurnDamage,
    onlyDamage: onlyDamage,
    damageProcess: damageProcess
}