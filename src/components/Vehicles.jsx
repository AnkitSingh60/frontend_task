import React, { useContext, useRef } from "react";
import { contextFal } from '../CreateContext/FalconContext'
import {
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";


function Vehicles(props) {
    const {
        planets, vehicles, chosenPlanet, chosenVehicles, vehicleCount, timeTaken, vehicleOnCount, setVehicleCount, setChosenVehicles, setTimeTaken, setTotalTime, setIsOk
    } = useContext(contextFal);

    const previousSelectedVehicle = useRef(-1);

    const SubmitButtonState = (selectedVehiclearr) => {
        const res = selectedVehiclearr.includes(null) ? false : true;
        setIsOk(res);
    };

    const calculateVehicleLeft = () => {
        const clonedVehicleCount = JSON.parse(JSON.stringify(vehicleCount));
        const originalCount = vehicles.map((vehicle) => vehicle.total_no);
        const getCurrentIndex = vehicles.findIndex(
            (vehicle) => vehicle.name === vehicleOnCount.current
        );
        const getPreviousIndex = vehicles.findIndex(
            (vehicle) => vehicle.name === previousSelectedVehicle.current
        );

        clonedVehicleCount[getCurrentIndex] > 0 ? (
            (clonedVehicleCount[getCurrentIndex] -= 1)
        ) : (
            <></>
        );

        clonedVehicleCount[getPreviousIndex] < originalCount[getPreviousIndex] ? (
            (clonedVehicleCount[getPreviousIndex] += 1)
        ) : (
            <></>
        );
        setVehicleCount(clonedVehicleCount);
        return vehicleCount;
    };

    const OnSelectVehicle = (e, index) => {
        const clonedSelectedVehicle = JSON.parse(JSON.stringify(chosenVehicles));
        previousSelectedVehicle.current = clonedSelectedVehicle[index];
        clonedSelectedVehicle[index] = e.target.value;
        vehicleOnCount.current = e.target.value;
        setChosenVehicles(clonedSelectedVehicle);
        calculateVehicleLeft();
        calculateTime(index, clonedSelectedVehicle);
        SubmitButtonState(clonedSelectedVehicle);
    };

    const evaluateDisability = (name) => {
        if (chosenVehicles[props.index] === null) {
            return true;
        } else {
            return !chosenVehicles[props.index].includes(name);
        }
    };

    const calculateTime = (index, clonedSelectedVehicle) => {
        const getSpeed = vehicles.filter(
            (vehicle) => clonedSelectedVehicle[index] === vehicle.name
        )[0].speed;
        const getDistance = planets.filter(
            (planet) => chosenPlanet[index] === planet.name
        )[0].distance;
        const clonedTimeValues = JSON.parse(JSON.stringify(timeTaken));
        const time = getDistance / getSpeed;
        clonedTimeValues[index] = time;
        const total_time = clonedTimeValues.reduce((prev, curr) => prev + curr);
        setTimeTaken(clonedTimeValues);
        setTotalTime(total_time);
    };

    return (
        <>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={(e) => OnSelectVehicle(e, props.index)}
                >
                    {vehicles.map((vehicle, id) => {
                        let disabled = false;
                        vehicleOnCount.current = "";
                        if (
                            (vehicle.max_distance < props.PlanetDistance ||
                                vehicleCount[id] === 0) &&
                            evaluateDisability(vehicle.name)
                        ) {
                            disabled = true;
                        }
                        return (
                            <>
                                <FormControlLabel
                                    value={vehicle.name}
                                    control={<Radio disabled={disabled} />}
                                    label={
                                        vehicle.name +
                                        "(" +
                                        vehicleCount[id] +
                                        "/" +
                                        vehicle.total_no +
                                        ")"
                                    }
                                />
                            </>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </>
    );
}

export default Vehicles;