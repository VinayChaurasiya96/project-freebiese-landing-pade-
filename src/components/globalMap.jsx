import React from "react";
import './gloalMap.css'
import mapImg from '../Assets/Huge Global.svg'
import redditImg from '../Assets/Mask Group (1).svg'
import amazoneIcon from '../Assets/Mask Group (2).svg';
import discordIcon from '../Assets/Mask Group (3).svg'
import spotyFyIcon from '../Assets/Mask Group (4).svg'
import netFlixIcon from '../Assets/Mask Group.svg'



export const Globalmap = () => {
  return(
    <>
      <div className="mapMain">
        <h1>Huge Global Network of Fast VPN</h1>
        <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        <img className="mapImg" src={mapImg}alt="" />
        <div className="companylogo">
            <img src={netFlixIcon} alt="" />
            <img src={redditImg } alt="" />
            <img src={amazoneIcon} alt="" />
            <img src={discordIcon} alt="" />
            <img src={spotyFyIcon } alt="" />
        </div>
      </div>
    </>
  )
}