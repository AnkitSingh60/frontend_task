import React, { useContext } from "react";
import { contextFal } from "../CreateContext/FalconContext";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import TimeTaken from './TimeTaken';
import { Button } from '@mui/material';
import Destination from './Destination';


const Home = () => {
    const { planets, vehicles, isOk } = useContext(contextFal)
    let navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        navigate("/result")
    }

    return (
        <>
        <Header/>
        <div className="container">
        <h3 className="h3">Choose Planets you want to Search..</h3>
        <TimeTaken />
        </div>
        <div className="dest_container">
            <div className="Destination-select">
              {planets && vehicles ? <Destination /> : <></>}
            </div>
            
          </div>
      <div className="submitbutton">
        <Button style={{marginLeft:"300px" }} variant="contained" color="success" onClick={submitHandler} disabled = {!isOk}>
          Find 
        </Button>
      </div>
        </>
    )
}

export default Home