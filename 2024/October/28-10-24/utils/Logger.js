import fs from "fs"

function logRequest () {
    const log = `Request Recieved at ${new Date().toISOString()}\n`
    fs.appendFile("logs.txt", log, (err) => {
        if (err) throw err;
        console.log("Log Saved.");
    })
}

export {
    logRequest
}