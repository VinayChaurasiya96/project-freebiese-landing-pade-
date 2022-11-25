import React from "react";
import Logo from '../Assets/Logo.svg'
import styles from './footer.module.css'
import fbIcon from '../Assets/Facebook.svg'
import twitterIcon from '../Assets/Twitter.svg'
import instaIcon from '../Assets/Instagram.svg'
import { FooterRightLi } from "./footerLi";


export const Footer = () => {
    return(
        <>
          <div className={styles.footerMain}>
            <div className={styles.leftFooter}>
              <img className={styles.footerIcon} src={Logo} alt="" />
              <p className={styles.leftP}><span className={styles.lasVPN}>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
              
              <div className={styles.socialIcons}>
                <img className={styles.socialIc} src={fbIcon} alt="" />
                <img className={styles.socialIc} src={twitterIcon} alt="" />
                <img  className={styles.socialIc} src={instaIcon} alt="" />

              </div>
              <span className={styles.copyRight}>&#xa9;2020Lasles<span>VPN</span></span>
            </div>
            <div className={styles.rightFooter} >
              <FooterRightLi/>
            </div>

           
          </div>
        </>
    )
}