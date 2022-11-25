import React from "react";
import './intro.css'

export const IntroSpecialty = ({icon,number,name}) => {
    return(
        <>
           <div className="specFlexItem">
                <img className="introIcnsSize" src={icon} alt="" />
                <div>
                  <h3 className="intoHeading">{number}</h3>
                  <p className="introPara">{name}</p>
                </div>
            </div>
        </>
    )
}