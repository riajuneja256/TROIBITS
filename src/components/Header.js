import React from 'react';
import jQuery from 'jquery';
 
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import menuIcon from '../assets/images/menu-icon.png';
import menuHomeImg from '../assets/images/menu-home.png';
import menuHomeActiveImg from '../assets/images/menu-home-active.png';
import menuServiceImg from '../assets/images/menu-service.png';
import menuPortfolioImg from '../assets/images/menu-portfolio.png';
import menuAboutImg from '../assets/images/menu-about.png';
import menuContactImg from '../assets/images/menu-contact.png';
 
const Header = () => {
   var menuBShow = false;
   function menuBIconClick() {
      if (jQuery(".menuB-content").hasClass("show")) jQuery(".menuB-content").removeClass("show");
      else jQuery(".menuB-content").addClass("show");
   }
   function menuBOpenClick() {jQuery(".menuB-content").addClass("show");}
   function menuBCloseClick() {jQuery(".menuB-content").removeClass("show");}
  
   function menuClick(event) {
      var posVal = 0, menuStr = jQuery(event.target)[0].innerText;
      switch (menuStr) {
         case "Home":      posVal = 0; break;
         case "Services":    posVal = 150; break;
         case "About":     posVal = 450; break;
         case "Portfolio": posVal = 580; break;
         case "Contact":   posVal = 700; break;
         default:          posVal = 0; break;
      }
      // setMenuClass(menuStr);
      var realPosVal = document.documentElement.scrollHeight * posVal / 1000;
      document.documentElement.scrollTop = document.body.scrollTop = realPosVal;
   }
   // setTimeout(() => { setMenuClass("Home"); }, 0);
  
   return (
       <div className="header-wrap">
          <div className="header">
            <div className="left-logo">
               <img className="logo-img" src={logoImg} />
               <label className="logo-label">Troibits</label>
            </div>
            <div className="menu menuA">
               <div className="menuA-item" id="menuAHome" onClick={menuClick}>Home<div className="circle"></div></div>
               <div className="menuA-item" id="menuAServices" onClick={menuClick}>Services<div className="circle"></div></div>
               <div className="menuA-item" id="menuAAbout" onClick={menuClick}>About<div className="circle"></div></div>
               <div className="menuA-item" id="menuAPortfolio" onClick={menuClick}>Portfolio<div className="circle"></div></div>
               <div className="menuA-item" id="menuAContact" onClick={menuClick}>Contact<div className="circle"></div></div>

               {/* <NavLink className="menuA-item" to="/">Home<div className="circle"></div></NavLink>
               <NavLink className="menuA-item" to="/about">About<div className="circle"></div></NavLink>
               <NavLink className="menuA-item" to="/services">Services<div className="circle"></div></NavLink>
               <NavLink className="menuA-item" to="/portfolio">Portfolio<div className="circle"></div></NavLink>
               <NavLink className="menuA-item" to="/contact">Contact<div className="circle"></div></NavLink> */}

            </div>
            <div className="menu menuB">
               <div className="menu-icon" onClick={menuBOpenClick}><img src={menuIcon} /></div>
               <div className="menuB-content">
                  <div className="menuB-topbar">
                     <img className="menuB-logo" src={logoImg}></img>
                     <img className="menuB-close" src={menuIcon} onClick={menuBCloseClick}></img>
                  </div>
                  <div className="menuB-item" id="menuBHome" onClick={menuClick}>
                     Home<img src={menuHomeActiveImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBServices" onClick={menuClick}>
                     Services<img src={menuServiceImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBAbout" onClick={menuClick}>
                     About<img src={menuAboutImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBPortfolio" onClick={menuClick}>
                     Portfolio<img src={menuPortfolioImg}></img>
                  </div>
                  <div className="menuB-item" id="menuBContact" onClick={menuClick}>
                     Contact<img src={menuContactImg}></img>
                  </div>

                  {/* <NavLink className="menuB-item" to="/">Home</NavLink>
                  <NavLink className="menuB-item" to="/about">About</NavLink>
                  <NavLink className="menuB-item" to="/services">Services</NavLink>
                  <NavLink className="menuB-item" to="/portfolio">Portfolio</NavLink>
                  <NavLink className="menuB-item" to="/contact">Contact</NavLink> */}

               </div>
            </div>
          </div>
       </div>
    );
}
 
export default Header;