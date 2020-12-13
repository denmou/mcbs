class Health {
    /**
     * 
     * @param {} inst 实体对象
     * @param {number} max 最大生命值
     */
    constructor(inst, max) {
        this.inst = inst
        this.max = max
        this.min = 0
        this.current = this.max
        this.canMurder = true
        this.canHeal = true
    }

    /**
     * 重置
     */
    reset() {
        this.current = this.max
        this.canMurder = true
        this.canHeal = true
    }

    /**
     * 设置当前值为指定数值
     * @param {number} current 
     */
    setCurrent(current) {
        this.current = current > this.current ? this.current : current
    }

    /**
     * 受到伤害
     * @param {number} value 伤害数值
     */
    damage(value) {
        if (this.canMurder && value > 0) {
            let current = this.current - value
            this.current = current < this.min ? this.min : current
        }
    }

    /**
     * 恢复
     * @param {number} value 恢复数值
     */
    heal(value) {
        if (this.canHeal && value > 0) {
            let current = this.current + value
            this.current = current > this.max ? this.max : current
        }
    }

    /**
     * 是否阵亡
     * @returns {boolean} 是/否
     */
    isDead() {
        return this.current <= 0
    }
}

module.exports = Health