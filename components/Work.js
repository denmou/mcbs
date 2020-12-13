class Work {
    constructor(inst) {
        this.inst = inst
        this.onWork = null
        this.stateLeft = 0
        this.state = 0
    }

    setState(state, stateLeft = 1) {
        this.state = state
        this.stateLeft = stateLeft
    }

    setWorkFn(fn) {
        this.onWork = fn
    }

    onWork() {
        if (this.state != 0) {
            this.stateLeft--
            if (this.stateLeft <= 0) {
                this.state = 0
            }
        } else {
            if (this.onWork) {
                this.onWork()
            }
        }
    }
}

module.exports = Work