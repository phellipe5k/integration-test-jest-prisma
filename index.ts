import express from "express";
//@ts-ignore
import UserController from "./controller/User";
import bodyParser from "body-parser"
import 'dotenv/config'


const app = express()
const port = process.env.PORT
app.use(bodyParser.json())

app.use('/user', UserController)

app.listen(port, () => {
console.log(`RUNNING ON ${port}`)
})

export default app;