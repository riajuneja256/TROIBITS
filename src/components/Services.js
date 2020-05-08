import React from 'react';
import '../assets/styles/services.css';
import '../assets/styles/common.css';

import panelLogoStrategy  from '../assets/images/panel-logo-strategy.png';
import panelLogoBrand     from '../assets/images/panel-logo-brand.png';
import panelLogoApp       from '../assets/images/panel-logo-app.png';
import panelLogoProduct   from '../assets/images/panel-logo-product.png';
import panelLogoMaintence from '../assets/images/panel-logo-maintence.png';
import panelLogoMarket    from '../assets/images/panel-logo-market.png';
import panelLogoFuning    from '../assets/images/panel-logo-funing.png';
import panelLogoChat      from '../assets/images/panel-logo-chat.png';
import arrowDown          from '../assets/images/arrow-down.png';

const Services = () => {
    return (
      <div className="services">
         <div className="notice top-tri tri-part">
            <div className="label">Our Services<img src={arrowDown} className="img-arrow"></img></div>
            
         </div>
         <div className="content-wrap">
            <div className="services-content subpart-content">
               <div className="main-title">What we do?</div>
               <div className="main-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</div>
               <div className="panels">
                  <div className="panel-row">
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={panelLogoStrategy}></img>
                        </div>
                        <div className="panel-title">
                           <div>Strategy</div> <div>and Consultation</div>
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={panelLogoBrand}></img>
                        </div>
                        <div className="panel-title">
                           <div>Brand</div> <div>and Setup</div>
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={panelLogoApp}></img>
                        </div>
                        <div className="panel-title">
                           <div>App Develop</div> <div>iot and auto</div>
                           {/*meny mation */}
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={panelLogoProduct}></img>
                        </div>
                        <div className="panel-title">
                           <div>Product</div> <div>Design</div>
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        </div>
                     </div>
                  </div>
                  <div className="panel-row">
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={panelLogoMaintence}></img>
                        </div>
                        <div className="panel-title">
                           <div>Maintenance</div> <div>and support</div>
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={panelLogoMarket}></img>
                        </div>
                        <div className="panel-title">
                           <div>Growth</div> <div>marketing</div>
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={panelLogoFuning}></img>
                        </div>
                        <div className="panel-title">
                           <div>Funing</div> <div>and investments</div>
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={panelLogoFuning}></img>
                        </div>
                        <div className="panel-title">
                           <div>Funing</div> <div>and investments</div>
                        </div>
                        <div className="description">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        </div>
                     </div>
                     {/* <div className="panel-item panel-item-chat">
                        <div className="panel-title">
                           Let's chat 
                           <img src={panelLogoChat}></img>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}
 
export default Services;