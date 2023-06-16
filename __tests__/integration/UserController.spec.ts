import request from "supertest";
import app from "../../index";


describe("UserController -> ", () => {
    it("List | Should return an array", async () => {
        const res = await request(app).get("/user")
        console.log("ressss: ", )
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("Create | Should return a success message", async () => {
        const res = await request(app).post("/user")
            .send({ age: 25, name: "Phellipe", email: "phellipe@phellipe.com" });
        expect(res.statusCode).toEqual(200)
        expect(res.body).toMatchObject({message: 'Success'})
    });
})
