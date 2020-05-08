import React from 'react';
import '../assets/styles/yolo.css';
import '../assets/styles/common.css';
import jQuery from 'jquery';

import yoloCubeImg        from '../assets/images/yolo-cube.png';
import PhoneColorImg1  from '../assets/images/Artboard1.png'; 
import PhoneColorImg2  from '../assets/images/Artboard2.png'; 
import PhoneColorImg3  from '../assets/images/Artboard3.png'; 
import arrowLeftImg       from '../assets/images/arrow-left.png';
import arrowRightImg      from '../assets/images/arrow-right.png';

const Yolo = () => {
    var selAppItem = "yolo";

    setTimeout(() => {
        clickApp("yolo");
    }, 0);

    function clickApp(str) {
        selAppItem = str;
        jQuery(".app-content-item").removeClass("active");
        jQuery(".app-content-"+str).addClass("active");
        if(selAppItem == "yolo")
        {
            jQuery(".yolo-phone-img").attr("src", PhoneColorImg1);
            jQuery(".notice-blue").html("Taxi booking");
            jQuery(".yolo-title").html("YOLO");
            jQuery(".description").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim");
        }
        else if(selAppItem == "Bit7Pay")
        {
            jQuery(".yolo-phone-img").attr("src", PhoneColorImg2);
            jQuery(".notice-blue").html("Cryptocurrency App ");
            jQuery(".yolo-title").html("Bit7Pay");
            jQuery(".description").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim");
        }
        else if(selAppItem == "Excursify")
        {
            jQuery(".yolo-phone-img").attr("src", PhoneColorImg3);
            jQuery(".notice-blue").html("Travel App");
            jQuery(".yolo-title").html("Excursify");
            jQuery(".description").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim");
        }
        

    }
    function clickArrow(dir) {
        if (dir == "left") {
            if      (selAppItem == "first") clickApp('Excursify');
            else if (selAppItem == "yolo") clickApp('Bit7Pay');
            else clickApp('yolo');
        }
        else {
            if      (selAppItem == "first") clickApp('yolo');
            else if (selAppItem == "yolo") clickApp('Excursify');
            else clickApp('Bit7Pay');
        }
    }

    return (
        <div className="yolo">
            <div className="yolo-content subpart-content">
                <div className="yolo-part left-taxi">
                    <div className="notice-blue">Taxi booking</div>
                    <div className="yolo-title">YOLO</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</div>
                    <div className="arrow-part">
                        <img src={arrowLeftImg} onClick={() => clickArrow('left')}></img>
                        <img src={arrowRightImg} onClick={() => clickArrow('right')}></img>
                    </div>
                </div>
                <div className="yolo-part center-img">
                    <img className="yolo-cube-img" src={yoloCubeImg}></img>
                    <img className="yolo-phone-img" src={PhoneColorImg1}></img>
                </div>
                <div className="yolo-part right-app">
                    <div className="app-title">App Showcase</div>
                    <div className="app-content">
                        <div className="app-content-item app-content-yolo" onClick={() => clickApp('yolo')}>Yolo</div>
                        <div className="app-content-item app-content-first" onClick={() => clickApp('Bit7Pay')}>Bit7Pay</div>
                        <div className="app-content-item app-content-third" onClick={() => clickApp('Excursify')}>Excursify</div>
                    </div>
                </div>
            </div>
            <div className="yolo-footer foot-tri tri-part"></div>
        </div>
    );
}

export default Yolo;
