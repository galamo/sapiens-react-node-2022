import carsJson from "../data/cars.json"

type CarType = typeof carsJson[0]
function getCarsByOrigin(cars: Array<CarType>, origin: string): Array<CarType> | undefined {
    if (!Array.isArray(cars)) return;
    const result = cars.filter(car => car.Origin === origin.toUpperCase())
    return result
}

export { getCarsByOrigin }