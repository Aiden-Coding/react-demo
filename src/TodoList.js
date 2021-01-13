import React, { Component, Fragment } from 'react';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  // handleInputChange(e) {
  //   console.log(e.target.value)
  // }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
    console.log(e.target.value)
  }
  render() {
    return (
      // 占位符
      <Fragment>
        <div>
          <input value = {this.state.inputValue}
            // onChange={this.handleInputChange.bind(this)}
            onChange={this.handleInputChange}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>学习</li>
          <li>工作</li>
        </ul>
      </Fragment>
    );
  }
}
export default TodoList;
