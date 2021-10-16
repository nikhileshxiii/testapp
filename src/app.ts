import * as express from "express";
import { Express } from "express";

export function newApp(): Express {
    const app = express();

    app.get('/',
        (_, res: express.Response) => {
            res.send('hello world');
        }
    );
    app.get('/ping',
        (_, res) => {
            res.send("pong")
        });
    return app;
}