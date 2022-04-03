import { useEffect, useState } from "react"
import axios from "axios"
import Car from "../../ui-component/car"
import Header from "../../ui-component/header"

const CarsUrl = "http://localhost:3600/cars"
function CarsPage() {

    const [color, setColor] = useState("red")
    const [cars, setCars] = useState([])

    useEffect(() => {
        getCarsFromServer()
    }, [color])

    async function getCarsFromServer() {
        try {
            const carsData = await axios.get(CarsUrl)
            const { data } = carsData
            setCars(data)
        } catch (ex) {
            console.log("Error!!!")
        }
    }

    function handleChangeColor() {
        const nextColor = color === "red" ? "green" : "red"
        setColor(nextColor)
    }

    return <div>
        <Header title="Cars Page" color={color} />
        <button className="btn btn-primary" onClick={handleChangeColor}> Change Color </button>
        <div className="row">
            {cars.map((car: any, index) => { return <Car key={`${car.Name}${index}`} {...car} /> })}
        </div>
    </div>
}



export { CarsPage }