import React, { useContext } from "react";
import { contextFal } from "../CreateContext/FalconContext";
import Vehicles from "../components/Vehicles";
import { Paper, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const Destination = () => {
    const { planets, chosenPlanet, setChosenPlanet } = useContext(contextFal)

    const OnSelectPlanet = (event, key) => {
        const selectedPlanets = JSON.parse(JSON.stringify(chosenPlanet))
        selectedPlanets[key] = event.target.value;
        setChosenPlanet(selectedPlanets)
    }

    const OptionToRender = planets
        ? planets.map((planet, index) => {
            if (!chosenPlanet.includes(planet.name)) {
                return (
                    <MenuItem key={index} value={planet.name}>
                        {planet.name}
                    </MenuItem>
                )
            }
        }) : null

    const findDistance = (index) => {
        const selecPlanet = planets.filter((planet) => planet.name === chosenPlanet[index])
        return selecPlanet[0].distance;
    }
    return (
        <>
            <div>
                {chosenPlanet.map((planet, index) => {
                    return (
                        <div key={index}>

                            <Paper elevation={5}>
                                <FormControl fullWidth key={index}>
                                    <InputLabel id="label">
                                        Destination {index + 1}
                                    </InputLabel>
                                    <Select
                                        labelId="label"
                                        id="demo-simple-select"
                                        key={index}
                                        value={chosenPlanet[index]}
                                        onChange={(event) => OnSelectPlanet(event, index)} >
                                        <MenuItem key={index} value={chosenPlanet[index]}>
                                            {chosenPlanet[index]}
                                        </MenuItem>
                                        {OptionToRender}
                                    </Select>
                                    <>
                                        {chosenPlanet[index] ? (
                                            <>
                                                <div>
                                                    Distance - {findDistance(index)}
                                                </div>
                                                <Vehicles
                                                    index={index}
                                                    PlanetDistance={findDistance(index)}
                                                />
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                </FormControl>
                            </Paper>

                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Destination
