class Space {
    constructor() {
        this.array = []
    }

    /**
     * 
     * @param {object} item 
     */
    add(item) {
        this.array.push(item)
    }

    /**
     * 
     * @param {number} index 
     */
    get(index) {
        return this.array[index]
    }

    /**
     * 
     * @param {number} index 
     */
    remove(index) {
        if (this.array.length > index) {
            let items = this.array.splice(index, 1)
            return items
        }
        return []
    }

    size() {
        return this.array.length
    }

    isEmpty() {
        return this.array.length <= 0
    }
}

module.exports = Space