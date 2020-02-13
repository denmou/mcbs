function Card() {
    var _id;
    var _info = {
        hp = 0,
        atk = 0,
        cd = 0,
        skillList = []
    };
    var _battle = {
        hp = 0,
        atk = 0,
        cd = 0,
        skillList = [],
        state: 0,
        shortBuff: [],
        longBuff: [],
        battleBuff: []
    }
}

module.exports = Card
