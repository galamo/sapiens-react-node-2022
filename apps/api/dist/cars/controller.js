"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarsByOrigin = void 0;
function getCarsByOrigin(cars, origin) {
    if (!Array.isArray(cars))
        return;
    const result = cars.filter(car => car.Origin === origin.toUpperCase());
    return result;
}
exports.getCarsByOrigin = getCarsByOrigin;
