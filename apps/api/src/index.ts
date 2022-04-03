console.log("Starting Our Script!")
import dotenv from "dotenv"
dotenv.config()
import express, { Request, Response, NextFunction } from "express"
import { router } from "./cars/route"
import { generateRequestId } from "./utils"
import bodyParser from "body-parser"
import cors from "cors"
const app = express();

app.use(cors())
app.use(addRequestId)
app.use(bodyParser.json())

function addRequestId(req, res, next) {
    res.append("x-request-id", generateRequestId())
    next()
}

app.get("/healthcheck", function (req: Request, response: Response, next: NextFunction) {
    // do something when calling healtcheck
    response.send("API_WORKING")
})

app.use("/cars", router)

app.use((error, req, res, next) => {
    res.status(409).json({ message: "Something went wrong!" })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}`)
})

