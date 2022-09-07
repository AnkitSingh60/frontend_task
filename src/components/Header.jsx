import React from 'react'

const Header = () => {
    return (
        <div className="header-container">
            <h3 className="header-text">Falcone</h3>
            <div className="header-buttons-container">
                <button className="reset-button" >Home</button>
                <div className="reset-button">RESET</div>
            </div>
        </div>
    )
}

export default Header