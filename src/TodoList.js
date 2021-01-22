import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todolist extends Component {
  // 疑问一 怎么获取todolist的父组件传来的值

  // constructor(props){
  //     super(props)
  //     console.log(props)
  //     const newName = props.title
  //     this.setState({
  //         title:newName
  //     })
  // }

  render() {
    return (
      <div>
        <div>
          <h1>Hello World!!!</h1>

          <input value={this.props.inputValue} onChange={this.props.ChangeInput} />
          <button onClick={this.props.handleSubmit}>提交</button>
        </div>

        <ul>
          {this.props.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// 定义映射关系   把store的数据    用props父子组件传值的方式传给todolist
const mapStateToProps = (state) => {
  console.log(state);
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

// store.dispatch 挂载到props上  改变store的内容 必须触发dispatch
const mapDispatchToprops = (dispatch) => {
  return {
    ChangeInput(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value,
      };
      // console.log(e.target.value)
      dispatch(action);
    },

    handleSubmit() {
      const action = {
        type: 'add_item',
      };
      dispatch(action);
    },
  };
};

// connect 方法就是让todolist跟store做连接
export default connect(mapStateToProps, mapDispatchToprops)(Todolist);
