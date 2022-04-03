
const axios = require("axios")
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
            if (typeof param !== 'string') {
                reject("Invalid Parameter")
            } else {
                resolve(cars)
            }
        }, 2000)
    })
}


async function getCarsMain() {
    try {
        console.log("Before request in getCarsMain")
        const result = await getCarsFromServer("resolveMe")
        console.log("<Resolve-Blocked!!!> This code will be blocked till the result will resolve!")
        const { Origin } = result && result[0]
        // const origin = result[0].Origin
        const countryResultApi = await axios.get(`https://restcountries.com/v3.1/name/${Origin}`)
        console.log(countryResultApi.data)

    } catch (ex) {
        console.log("<Reject-Blocked!!!> This code will be blocked till the result will resolve!")
        console.log(ex)
    }
}

getCarsMain();

for (let index = 0; index < 5; index++) {
    someMain(index)
}
function someMain(index) {
    console.log(`Continue Script ${index}`)
}
