import React  from "react";
import './plans.css'
import chekIcon from '../Assets/Group 1120.svg'


export const Plans = ({name,icon,list,price}) => {
    return(
        <>
        
          <div className="cardHeading">
            
          </div>
          <div className="plansMain">
            <div className="freeImage"><img src={icon} alt="" /></div>
            <h3 className="cardsName">{name}</h3>
           <div className="ulCenter">
                <ul className="cardsUl">
                    {list.map((el,i)=>
                    <li className="cardList" key={i}><span><img src={chekIcon} alt="" /></span> {el}</li>
                    )}
                </ul>
           </div>
           
          </div>
          <div className="cardsBottom">
             <h2>{price}</h2>
             <button className="selectBtn">select</button>
           </div>
        </>
    )
}