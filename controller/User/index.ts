import express from "express";
//@ts-ignore
import userService from "../../service/UserService";


const app = express.Router();

app.get("/", async (req, res) => {
    console.log("ping")
    const users = await userService.list();
    return res.status(200).json(users);
});

app.post("/", async (req, res) => {
    console.log("req.body: ", req.body)
    const user = await userService.create(req.body);
    if (user) {
        return res.status(200).json({message: "Success"});
    }
    return res.status(204).json({message: "Failed"});
    
});

export default app;
