import react from "react"

// "Name": "chevrolet chevelle malibu",
// "Miles_per_Gallon": 18,
// "Cylinders": 8,
// "Displacement": 307,
// "Horsepower": 130,
// "Weight_in_lbs": 3504,
// "Acceleration": 12,
// "Year": "1970-01-01",
// "Origin": "USA"

interface IProps {
    Name?: string
    Cylinders?: string
    Horsepower?: string
    Origin?: string
}
export default function Car(props: IProps) {
    return <div className="card" style={{ width: "18em" }}>
        <img className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{props.Name}</h5>
            <p className="card-text">{props.Cylinders}</p>
            <h1 style={{ background: "black" }}>HP: <span className="badge badge-primary">{props.Horsepower}</span></h1>
            <a href="#" className="btn btn-primary">{props.Origin}</a>
        </div>
    </div>

}

