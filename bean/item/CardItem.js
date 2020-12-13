class CardItem {
    /**
     * 
     * @param {number} id 
     * @param {number} level 
     * @param {number[]} skills 
     */
    constructor(id, level, skills) {
        this.id = id
        this.level = level
        this.skills = skills
    }

    getId() {
        return this.id
    }

    getLevel() {
        return this.level
    }

    getSkills() {
        return this.skills
    }
}

module.exports = CardItem