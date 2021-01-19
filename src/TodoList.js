import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import axios from 'axios'
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
    const tmpList = [...this.state.list];
    tmpList.splice(index, 1);
    this.setState({
      list: tmpList,
    });
    console.log(index);
  };

  handleItemDelete = (index)=> {
    const tmpList = [...this.state.list];
    tmpList.splice(index, 1);
    this.setState({
      list: tmpList,
    });
    console.log(index);
  };
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // <li key={index} onClick={this.handleDeleteListItem.bind(this,index)}>
        //   {item}
        // </li>
        // <li key={index} onClick={()=>this.handleDeleteListItem(index)}>
        // <li
        //   key={index}
        //   onClick={() => this.handleDeleteListItem(index)}
        //   // 渲染html脚本
        //   dangerouslySetInnerHTML={{ __html: item }}
        // >
        //   {/* {item} */}
        // </li>
        <TodoItem
          content={item}
          index={index}
          key={index}
          itemDelete={this.handleItemDelete}
        />
      );
    });
  }
  componentDidMount() {
    axios.get('/api/todoList')
    .then(()=>{alert('succ')})
    .catch(()=>{alert('fail')})
  }
  render() {
    return (
      // 占位符
      <Fragment>
        <div>
          {/* htmlfor  聚焦 */}
          <label htmlFor="insertArea">请输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
            // onChange={()=>this.handleInputChange}
          />
          <button onClick={() => this.handleBtnClick()}>提交</button>
          {/* <button onClick={this.handleBtnClick.bind(this)}>提交</button> */}
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
}
export default TodoList;
