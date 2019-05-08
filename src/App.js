import React from 'react';
import './App.css';
import PcIndex from './pages/pc_index';
import MobileIndex from './pages/mobile_index';
import MediaQuery from 'react-responsive';
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      num:"100"
    };
  }
  render() {
    return (
        <div>
          <MediaQuery query = '(min-device-width:1224px)'>
            <PcIndex/>
          </MediaQuery>
          <MediaQuery query = '(max-device-width:1224px)'>
            <MobileIndex/>
          </MediaQuery>
        </div>
    );
  }

}
