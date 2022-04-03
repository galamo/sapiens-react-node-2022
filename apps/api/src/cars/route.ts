import express from "express"
import carsJson from "../data/cars.json"
import { getCarsByOrigin } from "./controller"

const router = express.Router()
//cars =>>
router.use(function (req, res, next) {
    console.log("Request Started", req.baseUrl, JSON.stringify(req.params))
    next()
})

router.get("/", function (req, res, next) {
    res.json(carsJson)
})

router.get("/:origin", function (req, res, next) {
    const { origin } = req?.params
    // if (origin.length > 10) return res.status(400).json({ message: "invalid parameter" })
    if (origin.length > 10) return next(new Error())
    res.json(getCarsByOrigin(carsJson, origin))
})


export { router };