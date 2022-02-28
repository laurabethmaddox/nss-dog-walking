import { getCities, getWalkers } from "./database.js"

// const walkers = getWalkers()
// Updated invoking of getCities
const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ol>"

    // for (const walker of walkers) {
    //     citiesHTML += `<li>${walker.city}</li>`
    // }

    // Updated for...of loop iterating through the array value
    // of cities
    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

