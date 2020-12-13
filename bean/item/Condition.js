const Card = require("../Card")

/**
 * 比较等待时间最长
 * @param {Card} source 
 * @param {Card} target 
 * @returns {boolean}
 */
var longestCd = function(source, target) {
    return !source || target.getCd() > source.getCd();
}

/**
 * 比较等待时间最短
 * @param {Card} source 
 * @param {Card} target 
 * @returns {boolean}
 */
var shortestCd = function(source, target) {
    return !source || target.getCd() < source.getCd();
}

var random = function(source, target) {
    return Math.random() > .5
}

module.exports = {
    longestCd: longestCd,
    shortestCd: shortestCd,
    random: random
}