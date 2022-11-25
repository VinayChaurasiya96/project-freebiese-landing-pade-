import React from "react";
 import styles from './footer.module.css'

export const FooterRightLi = ()=> {

   let productData  = ["Download","Pricing","Location","Server","Countries","Blog"]
   let engageData = ["LaslesVPN ? ","FAQ","Tutorials","About Us","Privacy Policy","Terms of Service"]
   let earnData = ["Affiliate","Become Partner"]
    
   return(
    <>
        <div className={styles.footerRightLiMain}>
           <div>
              <h4 className={styles.footerRightHeading}>Product</h4>
               <ul className={styles.ulPad}>
                  
                  {productData.map((el,i)=>
                     <li key={i}>{el}</li>
                  )}
               </ul>
           </div>
           <div>
              <h4 className={styles.footerRightHeading}>Enagage</h4>
               <ul className={styles.ulPad}>
                  
                  {engageData.map((el,i)=>
                     <li  key={i}>{el}</li>
                  )}
               </ul>
           </div>
           <div>
              <h4 className={styles.footerRightHeading}>Earn Money</h4>
               <ul className={styles.ulPad}>
                  
                  {earnData.map((el,i)=>
                     <li  key={i}>{el}</li>
                  )}
               </ul>
           </div>
        </div>
    </>
   )
}