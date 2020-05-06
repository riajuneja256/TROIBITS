import React from 'react';
import '../assets/styles/footer.css';
 
import logoImg from '../assets/images/logo.png';
 
const Footer = () => {
    return (
      <div className="footer-wrap">
         <div className="footer">
            <img className="logo-img" src={logoImg} />
            <label className="logo-label">TROBITS</label>
            <div className="footer-content">
               <div className="footer-item infoTech">
                     2019 Trobits infotech private limited
               </div>
               <div className="footer-item siteMap">
                     Sitemap
               </div>
               <div className="footer-item terms">
                     Terms of use
               </div>
               <div className="footer-item privacy">
                     Privacy policy
               </div>
            </div>
         </div>
      </div>
    );
}

export default Footer;