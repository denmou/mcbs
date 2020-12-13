class Cd {
    constructor(inst, value) {
        this.inst = inst
        this.value = value
        this.current = value
        this.min = 0
    }

    /**
     * 重置
     */
    reset() {
        this.current = this.value
    }

    /**
     * 增加
     * @param {number} value 
     */
    increase(value) {
        current = this.current + value
        this.current = current < this.min ? this.min : current
    }
}

module.exports = Cd