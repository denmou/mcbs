const https = require("https")

function requestData(type, id, callback) {
    let postData = JSON.stringify({
        id: 1,
        type: "card"
    })
    let options = {
        hostname: "www.biocurd.com",
        path: "/data/info",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData)
        }
    }
    let req = https.request(options, res => {
        let body = "";
        res.on("data", chip => {
            body += chip;
        });
        res.on("end", () => {
            callback(0, body);
        });
        res.on("error", error => {
            callback(-1, error);
        })
    })
    req.on("error", error => {
        callback(-1, error);
    })
    req.write(postData);
    req.end();
}

module.exports = {
    requestData: requestData
}