import React from 'react'
import { Button } from '@mui/material';

const Header = () => {
    const ResetButton = () => {
        window.location.reload();
      };
    return (
        <div className="headerContainer">
            <div className="buttoncontainer">
                <Button style={{marginLeft:"100px" }} variant="outlined" className="reset" onClick={() => ResetButton()} >Home</Button>
                <Button variant="contained" color="success" size="medium" className="reset" style={{marginLeft:"100px", marginTop:"5px" }}  onClick={() => ResetButton()}>RESET</Button>
            </div>
        </div>
    )
}

export default Header