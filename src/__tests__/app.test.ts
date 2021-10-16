import { newApp } from "../app";
import * as request from "supertest";


const app = newApp();

describe("Test public routes", () => {
    it("should return 200", () => {
        return request(app)
            .get("/")
            .expect(200, "hello world")
    })

    it("should return 200", () => {
        return request(app)
            .get("/ping")
            .expect(200, "pong")
    })

})