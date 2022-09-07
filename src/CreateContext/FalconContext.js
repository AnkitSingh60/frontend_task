import React, { useState, useEffect, useRef, createContext } from "react";
import axios from "axios";

export const falconeContext = createContext();


const FalconContext = ({ children }) => {
    const [planets, setPlanets] = useState([{}])
    const [vehicles, setVehicles] = useState([{}])
    const [chosenPlanet, setChosenPlanet] = useState([null, null, null, null])
    const [chosenVehicles, setChosenVehicles] = useState([null, null, null, null])
    const [vehicleCount, setVehicleCount] = useState([])
    const [timeTaken, setTimeTaken] = useState([0, 0, 0, 0])
    const [totalTime, setTotalTime] = useState(0)
    const [isOk, setIsOk] = useState(false)

    const vehicleOnCount = useRef(-1)

    const fetchPlanets = async () => {
        try {
            const res = await axios.get("https://findfalcone.herokuapp.com/planets")
            return res.data;
        } catch (error) {
            console.log('error:', error.message)
        }
    }
    const fetchVehicles = async () => {
        try {
            const res = await axios.get("https://findfalcone.herokuapp.com/vehicles")
            return res.data;
        } catch (error) {
            console.log('error:', error.message)
        }
    }

    const getAllVehicleCount = (Allvehicles) => {
        const count = Allvehicles.map(vehicles => vehicles.total_no)
        setVehicleCount(count)
    }

    useEffect(() => {
        (async () => {
            let foundPlanet = await fetchPlanets()
            let foundVehicle = await fetchVehicles()
            setPlanets(foundPlanet)
            setVehicles(foundVehicle)
            getAllVehicleCount(foundVehicle)
        })()

    }, [])

    const set = { planets, vehicles, chosenPlanet, chosenVehicles, vehicleCount, timeTaken, totalTime, isOk, vehicleOnCount, setPlanets, setVehicles, setChosenPlanet, setChosenVehicles, setTimeTaken, setTotalTime, setIsOk }
    return (
        <falconeContext.Provider set={set}>
            {children}
        </falconeContext.Provider>
    )
}

export default FalconContext