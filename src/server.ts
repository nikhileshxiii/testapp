import { newApp } from "./app";
import * as http from "http";

const app = newApp();

http.createServer({}, app).listen(8799, () => {
    console.log("listening on 8799")
});