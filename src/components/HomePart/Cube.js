import React, { Component } from 'react';
import '../../assets/styles/home.css';

import shadowBackImg from '../../assets/images/shadow-back.png';
import cubeBackImg from '../../assets/images/cube-back.png';

class Cube extends Component {
    constructor(props) {
        super(props);
        // this.state = props.data;
        // this.selItem = props.selItem;
    }
    
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {
        // if (this.selItem != nextProps.selItem) {
        //     this.selItem = nextProps.selItem;
        // }
    }

    // changeSize = (value, key) => {
    //     this.setState({ [key]: value });
    //     this.callSetBase();
    // }
    // callSetBase () {
    //     setTimeout(() => {
    //         this.props.callSetBase({length:this.state.length, thick:this.state.thick, height:this.state.height, vase:this.state.vase});
    //     }, 0);
    // }

    render() {
        return (
            <div className="home">
                <div className="home-content subpart-content">
                    <div className="left-string home-part">
                        <div className="title">We Make Your App Idea A</div>
                        <div className="success pro-thin">SUCCESS</div>
                        <div className="int-line"></div>
                        <div className="description pro-thin">
                            From idea to development, we support and stay with you in good and hard times till we celebrate our success together
                        </div>
                        <div className="chat-btn">Lets Chat!</div>
                    </div>
                    <div className="right-webgl home-part" id="rightWebGL">
                        <div id="colorShadow"><img src={shadowBackImg} /></div>
                        <div id="container"><img src={cubeBackImg} /></div>
                    </div>
                </div>
            </div>
        )
    }
}
  
export default Cube;