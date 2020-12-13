const Duel = require('../bean/Duel')

class Phase {
    constructor() {
    }

    /**
     * 执行当前阶段流程
     * 
     * @param {Duel} duel 
     */
    run(duel) {
        this.start(duel)
        this.working(duel)
        this.end(duel)
    }

    /**
     * 当前阶段流程开始
     * 
     * @param {Duel} duel 
     */
    start(duel) {
        console.log('Phase start!')
    }

    /**
     * 当前阶段流程处理中
     * 
     * @param {Duel} duel 
     */
    working(duel) {
        console.log('Phase working!')
    }

    /**
     * 当前阶段流程结束
     * 
     * @param {Duel} duel 
     */
    end(duel) {
        console.log('Phase end!')
    }
}

module.exports = Phase