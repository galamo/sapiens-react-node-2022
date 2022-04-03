const cars = [{
    "Name": "chevrolet chevelle malibu",
    "Miles_per_Gallon": 18,
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Acceleration": 12,
    "Year": "1970-01-01",
    "Origin": "USA"
},
{
    "Name": "buick skylark 320",
    "Miles_per_Gallon": 15,
    "Cylinders": 8,
    "Displacement": 350,
    "Horsepower": 165,
    "Weight_in_lbs": 3693,
    "Acceleration": 11.5,
    "Year": "1970-01-01",
    "Origin": "USA"
}]


function getCarsFromServer(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof param === 'string') {
                reject("No Parameter sent")
            } else {
                resolve(cars)
            }
        }, 1000)
    })
}

// then => resolve
// catch => reject 
getCarsFromServer("RejectMe").then(successHandler).catch(rejectHandler)
getCarsFromServer(2).then(successHandler).catch(rejectHandler)
function successHandler(data) { console.log(data) }
function rejectHandler(ex) { console.log(`#######  Rejected Promise ${ex}`) }