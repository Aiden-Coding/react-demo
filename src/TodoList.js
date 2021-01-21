import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, message, Row, Col } from 'antd';
import axios from 'axios';
import store from './store/index';
import { getInputChangeAction, getAddTodoItem, getDelData, getCleanData } from './store/actionCreators';
import { CHANGE_INPUT_INPUTVALUE, ADD_TODO_ITEM, DEL_DATA } from './store/actionType';

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
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <Input
          value={this.state.inputValue}
          placeholder="add todo"
          onChange={this.handleChange}
          style={{ width: '60%' }}
        />
        <Button type="primary" onClick={this.handleAdd}>
          Add
        </Button>
        <Button type="primary" onClick={this.handleAjax}>
          Export
        </Button>
        <Button type="primary" onClick={this.handleClean}>
          Clean
        </Button>
        <List
          header={<div style={{ textAlign: 'center' }}>** TodoList **</div>}
          footer={<div style={{ textAlign: 'center', fontSize: '10px' }}> Copyright Rain </div>}
          bordered
          dataSource={this.state.dataObj}
          renderItem={(item) => (
            <List.Item onClick={this.handleDel}>
              <ul>
                <li>{item}</li>
              </ul>
            </List.Item>
          )}
          style={{ width: '20rem', margin: '0.5rem' }}
        />
      </div>
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
