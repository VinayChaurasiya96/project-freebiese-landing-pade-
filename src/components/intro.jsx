import React from 'react';
import "./intro.css";
import menLogo from "../Assets/Illustration 1.svg";
import userIcon from '../Assets/Group 1216.svg';
import mapIcon from "../Assets/Group 1215.svg";
import serverIcon from "../Assets/Group 1217.svg"
import { IntroSpecialty } from './IntroSpeciality';


export const Intro = () =>{
    return(
        <>
          <div className='introMain'>
            <div className='introFlex'>
              <div className='leftContent'>
                  <h1 className='introLeftHeading'>Want anything to be easy with <span className='introLasp'> LaslesVPN</span>.</h1>
                  <p className='introParawidth'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                  <button className='startBtn'>Get Started</button>
              </div>
              <div className="rightContent">
                  <img className='menImgSize' src={menLogo} alt="" />
              </div>
            </div>
            <div className='introSpec'>
              <IntroSpecialty  icon = {userIcon} number="90+" name="Users" />
              <div className='borderRight1'></div>
              <IntroSpecialty  icon = {mapIcon} number="30+" name="Locations" />
              <div className='borderRight2'></div>
              <IntroSpecialty  icon = {serverIcon} number="50+" name="Servers" />
            </div>
          </div>

        </>
    )
}
