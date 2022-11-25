import React from "react";
import Hero from '../Assets/Illustration 2.svg'
import './feature.css'
import checkIcon from '../Assets/Group 1120.svg'

export const Features = () => {
    return(
        <>
          <div className="featuresMain">
            <div className="featchLeft">
                <img className="featureImg" src={Hero} alt="" />
            </div>
            <div className="feactRight">
                <h1 className="featureH">We Provide Many Features You Can Use</h1>
                <p className="featureP">You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul className="featureUl">
                    <li className="featureLi"> <span><img src={checkIcon} alt="" /></span> Powerfull online protection.</li>
                    <li className="featureLi"> <span><img src={checkIcon} alt="" /></span> Internet without borders.</li>
                    <li className="featureLi"><span><img src={checkIcon} alt="" /></span> Supercharged VPN</li>
                    <li className="featureLi"><span><img src={checkIcon} alt="" /></span> No specific time limits.</li>
                </ul>
            </div>
          </div>
        </>
    )
}