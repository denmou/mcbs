const Scene = require('./bean/Scene')
const Dule = require('./bean/Duel')
const Player = require('./bean/Player')
const CardItem = require('./bean/item/CardItem')
const ItemCollection = require('./method/ItemCollection')

let item1 = new CardItem(1, 9, [])
let item2 = new CardItem(1, 10, [])
let collection = new ItemCollection('s')
let attacker = new Player('A', 1, [item1])
let defender = new Player('B', 1, [item2])
let dule = new Dule(attacker, defender, collection)

let scene = new Scene(dule)

scene.run().then(res => {
    if (res == 1) {
        console.log('进攻方获胜')
    } else {
        console.log('防守方获胜')
    }
})