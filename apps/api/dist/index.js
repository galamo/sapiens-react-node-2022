"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Starting Our Script!");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const route_1 = require("./cars/route");
const utils_1 = require("./utils");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(addRequestId);
app.use(body_parser_1.default.json());
function addRequestId(req, res, next) {
    res.append("x-request-id", (0, utils_1.generateRequestId)());
    next();
}
app.get("/healthcheck", function (req, response, next) {
    // do something when calling healtcheck
    response.send("API_WORKING");
});
app.use("/cars", route_1.router);
app.use((error, req, res, next) => {
    res.status(409).json({ message: "Something went wrong!" });
});
app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}`);
});
