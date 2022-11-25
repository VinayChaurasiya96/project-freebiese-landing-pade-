import React from "react";
import Logo from '../Assets/Logo.svg'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom';
import { TbAlignJustified } from "react-icons/tb";
import { useState } from "react";

export const Navbar = () => {

  const [toggle,setToggle] = useState(false);
    return(
        <>
          <nav className= {styles.navbar}>
          
          <div className={styles.logoWidth}>
           <img className={styles.logoSize} src= {Logo} alt="logo" />
          </div>
          
            <ul className={styles.list}>
                <li className={styles.listhover}>About</li>
                <li className={styles.listhover}>Features</li>
                <li className={styles.listhover}>Pricing</li>
                <li className={styles.listhover}>Testimonials</li>
                <li className={styles.listhover}>Help</li>
            </ul>
            <div className={styles.btnFlex}>
                <button className={styles.signInBtn}>Sign In</button>
                <button className={styles.signUpBtn}>Sign Up</button>
            </div>

            
              <div className={styles.navIcon}>
                <span onClick={()=>setToggle(!toggle)} > <TbAlignJustified /> </span>
              </div>
              <div className={toggle?styles.mobileMenu:styles.listHidden}>                
                <ul className={styles.mobileUl}>
                  <li className={styles.mobileList}>About</li>
                  <li className={styles.mobileList}>Features</li>
                  <li className={styles.mobileList}>Pricing</li>
                  <li className={styles.mobileList}>Testimonials</li>
                  <li className={styles.mobileList}>Help</li>
                 
                </ul>
                <ul className={styles.btnS}>
                  <li className= {styles.mobileSignInList}><button className={styles.mobileSignInBtn}>Sign In</button></li>
                  <li className={styles.mobileSignUpList}><button className={styles.mobileSignUpBtn} >Sign Up</button></li>
                </ul>
                
                    
                    
                 
              </div>
            
          </nav>
        </>
    )
}