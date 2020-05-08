import React, { Component } from 'react';
import Header from './Header';
import Home      from './Home';
import Services    from './Services';
import Yolo      from './Yolo';
import Efficient from './Efficient';
import Intro     from './Intro';
import Contact   from './Contact';
import Map       from './Map';
import Footer    from './Footer';
 
function Homepage(){
  return(
    <div>
      <Home />
      <Services />
      <Yolo />
      <Efficient />
      <Intro />
      <Contact />
      <Map />
    </div>
  );
}
export default Homepage;