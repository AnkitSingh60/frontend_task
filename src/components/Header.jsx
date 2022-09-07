import React from 'react'
import { Button } from '@mui/material';

const Header = () => {
    const ResetButton = () => {
        window.location.reload();
      };
    return (
        <div className="headerContainer">
            <div className="buttoncontainer">
               <div className="btn1">
               <Button style={{marginLeft:"100px" }} variant="contained" color="success"  className="reset" onClick={() => ResetButton()} >Home</Button>
               </div>
                <div className="btn2">
                <Button variant="contained" color="success" size="medium" className="reset" style={{marginLeft:"100px", marginTop:"5px" }}  onClick={() => ResetButton()}>RESET</Button>
                </div>
            </div>
        </div>
    )
}

export default Header