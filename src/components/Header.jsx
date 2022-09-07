import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Header = () => {
    let navigate = useNavigate();

    const ResetButton = () => {
        navigate("/")
      };
    return (
        <div className="headerContainer">
            <div className="buttoncontainer">
              
                <div className="btn2">
                <Button variant="contained" color="success" size="medium" className="reset" style={{marginLeft:"40px", marginTop:"5px" }}  onClick={() => ResetButton()}>HOME</Button>
                </div>
            </div>
        </div>
    )
}

export default Header