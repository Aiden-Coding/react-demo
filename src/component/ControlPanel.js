import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
export default class ControlPanel extends Component{
  render(){
    return (
      <div>
        <ClickCounter caption="First" initValue={0}/>
        <ClickCounter caption="Two" initValue={1}/>
        <ClickCounter caption="Three" initValue={2}/>
      </div>
    )
  }
}
