import React from 'react';
import '../assets/styles/exp.css';



  const data = [{
    id: 0,
    header: 'Product Design . Mobile App and Game Design . Industrial Design and Prototyping',
    body: 'Our design is a key factor why we are able to create better products as we do a proper ideation , research, planning then create something on a blank piece of paper which stands out and is minimal. A good design is user centric and should be able to explain the idea and the product in a glimpse.',
    },
  {
    id: 1,
    header: 'Blockchain and Cryptocurrency App Development Company',
    body: 'We have been developing Apps and Features on Blockchain for 3 Years now. We developed one of the first few Cryptocurrency Apps in India and implemented more than 100 Cryptocurrencies on different platforms.',
 },
  {
    id: 2,
    header: 'Internet of Things (I.O.T) and Business Automation Company',
    body: 'We automate your business, homes and manufacturing units with our system of apps and specially designed beacon boxes of Arduino and Raspberry Pie Chip Boards. Our mobile apps enable you to access and control the system easily which enables you to save time , money and resources.',
     },
  {
    id: 3,
    header: 'App Development Company and Dedicated Technology Partner or Technology Company',
    body: 'We have been providing Android and iOS App Development services to customers across the globe for more than 5 Years.',
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
        React.createElement("div", { className: componentClass, onClick: this.props._handleClick.bind(this)}));
    }}
  
  

  
  
  
