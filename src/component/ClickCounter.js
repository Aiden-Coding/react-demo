import React, { Component } from 'react';
class ClickCounter extends Component{
  constructor(props){
    super(props);
    this.onClickButton=this.onClickButton.bind(this);
    this.state={count: this.props.initValue || 0}
  }
  onClickButton(){
    this.setState({count:this.state.count+1});
  }
  render(){
    return (
      <div>
        <button onClick={this.onClickButton}>Click Me</button>
        Click count: {this.state.count}
      </div>
    )
  }
}
export default ClickCounter;
