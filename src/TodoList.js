import React, { Component, Fragment } from 'react';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['学习'],
    };
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    console.log(e.target.value);
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    });
  }

  // handleDeleteListItem(index){
  //   console.log(index)
  //  };
  handleDeleteListItem = (index) => {
    const tmpList = [...this.state.list]
    tmpList.splice(index,1)
    this.setState({
      list: tmpList
    })
    console.log(index);
  };
  render() {
    return (
      // 占位符
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
            // onChange={()=>this.handleInputChange}
          />
          <button onClick={() => this.handleBtnClick()}>提交</button>
          {/* <button onClick={this.handleBtnClick.bind(this)}>提交</button> */}
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              // <li key={index} onClick={this.handleDeleteListItem.bind(this,index)}>
              //   {item}
              // </li>
              // <li key={index} onClick={()=>this.handleDeleteListItem(index)}>
              <li key={index} onClick={() => this.handleDeleteListItem(index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
export default TodoList;
