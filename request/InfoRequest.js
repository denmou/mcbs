const https = require("https")

/**
 * 
 * @param {string} server 
 * @param {string} type 
 * @param {number} id 
 */
function requestData(server, type, id) {
    return new Promise(resolve => {
        let options = {
            hostname: 'www.biocurd.com',
            path: '/mysticalcard/v1/data/info/' + server + '/' + type + '/' + id,
            method: "GET"
        }
        let req = https.request(options, res => {
            let body = "";
            res.on("data", chip => {
                body += chip
            });
            res.on("end", () => {
                let data = JSON.parse(body)
                resolve(data.data)
            });
            res.on("error", error => {
                resolve()
            })
        })
        req.on("error", error => {
            resolve()
        })
        req.end()
    })
}

module.exports = {
    requestData: requestData
}