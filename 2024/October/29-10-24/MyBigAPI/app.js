import express from "express"
import { add } from "./utils/math.js"
import {logRequest} from "./utils/Logger.js";
const app = express();

app.get('/', (req, res) => {
    logRequest()
    console.log(add(2, 3));
    console.log(req);
    
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});