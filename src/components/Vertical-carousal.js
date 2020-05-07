import React from 'react';
import '../assets/styles/exp.css';



  const data = [{
    id: 0,
    header: '1Top App Development Company',
    body: '1From idea to development, we support and stay with you in good and hard times till we celebrate our success together',
    },
  {
    id: 1,
    header: '2Top App Development Company',
    body: '2From idea to development, we support and stay with you in good and hard times till we celebrate our success together',
 },
  {
    id: 2,
    header: '3Top App Development Company',
    body: '3From idea to development, we support and stay with you in good and hard times till we celebrate our success together',
     },
];
class Vcarousal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeID: 0,
        buttonHover: false,
        buttonStyle: {
          color: '#ffffff' } };
  
    }
    _changeActive(id) {
      this.setState({
        activeID: id,
         });
  
  
    }
    _buttonColour() {
      if (!this.state.buttonHover) {
        this.setState({
          buttonHover: true,
          buttonStyle: {
            color: data[this.state.activeID].colour } });
  
  
      } else {
        this.setState({
          buttonHover: false,
          buttonStyle: {
            color: '#ffffff' } });
      }
    }
    render() {
      return (
        React.createElement("section", { className: "wrapper"},
        React.createElement(Selectors, {
          data: data,
          activeID: this.state.activeID,
          _changeActive: this._changeActive.bind(this) }),
  
        React.createElement(Panel, {
          data: data[this.state.activeID],
          buttonStyle: this.state.buttonStyle,
          _buttonColour: this._buttonColour.bind(this) })));
  
    }}
export default Vcarousal;
 
  class Panel extends React.Component {
    render() {
        console.log("entered panel")
      return (
        React.createElement("aside", { className: "panel" },
        React.createElement("h2", { className: "panel-header" }, this.props.data.header),
        React.createElement("div", { className: "int-line" }),
        React.createElement("p", { className: "panel-info pro-thin" }, this.props.data.body),
        React.createElement("button", { className: "panel-button",
          style: this.props.buttonStyle,}, "Let's Chat")));
    }}
  
  class Selectors extends React.Component {
      
    _handleClick(e) {
      if (this.props.id !== this.props.activeID) {
        this.props._changeActive(this.props.id);
      } else {
        return;
      }
    }
    render() {
        console.log("entered Selectors")
      return (
        React.createElement("div", { className: "selectors" },
        this.props.data.map((item) =>
        React.createElement(Selector, {
          key: item.id,
          id: item.id,
          _handleClick: this._handleClick,
          _changeActive: this.props._changeActive,
          activeID: this.props.activeID }))));
  
    }}
  
  class Selector extends React.Component {
    render() {
        console.log("entered Selector")

      let componentClass = 'selector';
      if (this.props.activeID === this.props.id) {
        componentClass = 'selector active';
      }
      return (
        React.createElement("div", { className: componentClass, onClick: this.props._handleClick.bind(this) }));
    }}
  
  

  
  
  
