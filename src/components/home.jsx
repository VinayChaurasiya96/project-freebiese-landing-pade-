import React from "react";
import { Features } from "./features";
import { Intro } from "./intro";
import { Plans } from "./plans";
import freeIcon from '../Assets/Free.svg'
import './plans.css'
import { Globalmap } from "./globalMap";
import Testimonials from "./testimonials";
import { Subscriber } from "./subscribers";

export const Home = () => {
    let freePlanArr = ["Unlimited Bandwitch","Encrypted Connection","No Traffic Logs","Works on All Devices"]
    let standardPlanarr = ["Unlimited Bandwitch","Encrypted Connection","Yes Traffic Logs","Works on All Devices","Connect Anyware"]
    let premiumPlanArr =  ["Unlimited Bandwitch","Encrypted Connection","Yes Traffic Logs","Yes Traffic Logs","Connect Anyware","Get New Features"]
    return(
        <>
           <Intro/>
           <Features/>
          <div className="priceCard">
                 <div className="cardTopContent">
                    <h1>Choose Your Plan</h1>
                    <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
            <div className="plansCards">
               
                <div className="cardBorder">
                    <Plans price = "Free" icon = {freeIcon} name = "Free Plan" list = {freePlanArr} />
                </div>
            <div className="cardBorder">
                <Plans price = "$9 / mo" icon = {freeIcon} name = "Standard Plan" list = {standardPlanarr} />
            </div>
                <div className="cardBorder">
                    <Plans price="$12 / mo" icon = {freeIcon} name = "Premium Plan" list = {premiumPlanArr} />
                </div>
            </div>
          </div>
          <Globalmap/>
          <Testimonials/>
          <Subscriber/>
        </>
    )
}