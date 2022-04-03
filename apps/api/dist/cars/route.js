"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const cars_json_1 = __importDefault(require("../data/cars.json"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
exports.router = router;
//cars =>>
router.use(function (req, res, next) {
    console.log("Request Started", req.baseUrl, JSON.stringify(req.params));
    next();
});
router.get("/", function (req, res, next) {
    res.json(cars_json_1.default);
});
router.get("/:origin", function (req, res, next) {
    const { origin } = req === null || req === void 0 ? void 0 : req.params;
    // if (origin.length > 10) return res.status(400).json({ message: "invalid parameter" })
    if (origin.length > 10)
        return next(new Error());
    res.json((0, controller_1.getCarsByOrigin)(cars_json_1.default, origin));
});
