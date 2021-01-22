import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, message, Row, Col } from 'antd';
import axios from 'axios';
import store from './store/index';
import { getInputChangeAction, getAddTodoItem, getDelData, getCleanData, getTodoList } from './store/actionCreators';
import { CHANGE_INPUT_INPUTVALUE, ADD_TODO_ITEM, DEL_DATA } from './store/actionType';
import TodoListUI from './TodoListUi'
class TodoList extends Component {
  constructor(props) {
    super(props);

    //Store部分
    this.state = store.getState();
    //输出store的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    console.log(this.state);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleClean = this.handleClean.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
  }
  componentDidMount() {
    store.subscribe(this.handleStoreChange);
    const action = getTodoList();
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
      inputValue={this.state.inputValue}
      handleChange={this.handleChange}
      handleAdd={this.handleAdd}
      handleAjax={this.handleAjax}
      handleClean={this.handleClean}
      handleDel={this.handleDel}
      dataObj={this.state.dataObj}
      />
    );
  }

  handleAdd() {
    //redux
    const action = getAddTodoItem();
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleChange(e) {
    //redux
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleDel(index) {
    //redux
    const action = getDelData(index);
    store.dispatch(action);
  }

  handleClean() {

    this.setState(
      () => {
        return {
          dataObj: [],
        };
      },
      () => {
        const action = getCleanData();
        store.dispatch(action);
        message.success('Cleaning successed!', 0.4);
      },
    );
  }

  handleAjax() {
    axios
      .get('/todoList.json')
      .then((res) => {
        console.log(res.data);

        this.setState(
          () => {
            return {
              dataObj: [...this.state.dataObj.concat(res.data)],
            };
          },
          () => {
            message.success('Exportint successed!', 0.4);
          },
        );
      })
      .catch(() => {
        message.error('Fail to export!', 1);
      });
  }
}

export default TodoList;
