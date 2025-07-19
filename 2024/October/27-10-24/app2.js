const fs = require("fs");


fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error Reading File", err)
        return;
    }

    fs.writeFile("output.txt", data ,"utf8", ((err) => {
        if (err) {
            console.error("Error Writing new file", err)
            return;
        }
        console.log("File Created Successfully");
        
        fs.appendFile("output.txt", "\n operation completed✅", (err) => {
            if (err) {
                console.error("Something went wrong!")
            }

            console.log("OP DONE");
            
        })
    }))
})