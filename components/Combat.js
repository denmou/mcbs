class Combat {
    constructor(inst, defaultDamage = 0) {
        //拥有对象实体
        this.inst = inst
        //进攻次数
        this.battleTime = 1
        //攻击距离
        this.attackRange = 1
        //命中范围
        this.hitRange = 1
        //溅射范围
        this.areaHitRange = 0
        //溅射范围伤害百分比
        this.areaHitDamagePercent = 1
        //默认伤害
        this.defaultDamage = defaultDamage
        //对玩家伤害百分比
        this.playerDamagePercent = 1
        //最小攻击周期
        this.minAttackPeriod = 1
        //命中事件
        this.onHitFn = null
        //命中其他事件
        this.onHitPlayerFn = null
        //最后发起攻击时间
        this.lastStartAttackTime = 0
        //保持目标事件
        this.keepTargetFn = null
        //保持目标事件
        this.keepTargetTimeout = 0
        //命中效果标志
        this.hitEffectSymbol = null
        //能否发动攻击
        this.canAttack = true
        //最后目标id
        this.lastTargetGUID = null
    }
}

module.exports = Combat