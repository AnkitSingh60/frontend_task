import React, { useContext, useEffect, useState } from 'react';
import { contextFal } from '../CreateContext/FalconContext';
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from './Header';


const ResultPage = () => {
    const { chosenPlanet, chosenVehicles, timeTaken } = useContext(contextFal)
    const [result, setResult] = useState([null, null])
    let FinalResult = [];
    const navigate = useNavigate();

    const getToken = async () => {
        try {
            let res = await axios({
                method: "post",
                url: "https://findfalcone.herokuapp.com/token",
                headers: {
                    Accept: "application/json",
                },
            });
            return res.data;
        } catch (error) {
            console.log('error:', error.message);
        }
    }

    const FindFalcone = async (token, planets, vehicles) => {
        try {
            let res = await axios.post(
                "https://findfalcone.herokuapp.com/find",
                { token: token, planet_names: planets, vehicle_names: vehicles },
                {
                    headers: {
                        Accept: " application/json ",
                        "Content-Type": " application/json ",
                    },
                }
            );
            return res;
        } catch (error) {
            console.log('error:', error.message);
        }
    }

    const HomeButton = (event) => {
        event.preventDefault();
        navigate("/");
        window.location.reload()
    }

    useEffect(() => {
        (async () => {
            const token = await getToken();
            const res = await FindFalcone(
                token.token,
                chosenPlanet,
                chosenVehicles,
            );
            FinalResult[0] = res.data.status;
            FinalResult[1] = res.data.planet_name;
            setResult(FinalResult)
            // console.log('FinalResult:', FinalResult)
        })();

    }, [])


    return (
        <>
        <Header/>
            <div className="ResultDiv">
                {console.log(result)}
                {result[0] == null && result[1] === undefined ? (
                    <CircularProgress />
                ) : result[0] === 'success' ? (
                    <>
                        <div className="dilogBox">
                            {result[0]} <p>
                            ! Congratulations on Finding Falcone. King Shan is
                            Mighty Pleased.
                            </p>
                        </div>
                        <div className="result-parttwo">
                            <div>Time Taken - {timeTaken}</div>
                            <div>Found on Planet - {result[1]}</div>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="dilogBox">
                            Uhh ooo ! You couldnt find Falcone. King Shan is going to be
                            super pissed!! Better Luck Next Time!!
                        </p>
                    </>
                )}
                <Button  variant="contained" color="success"  onClick={HomeButton} style={{marginTop:"20px"}}>
                    Play Again
                </Button>
            </div>
        </>
    )
}

export default ResultPage