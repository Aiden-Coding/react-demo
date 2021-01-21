import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { DatePicker } from 'antd';
import { Input, Button, List } from 'antd';
const TodoListUi = (props) => {

    return (
      <React.Fragment>
        <h3 style={{ marginBottom: 16 }}>TodoList</h3>
        <Input
          value={props.inputValue}
          placeholder="todolist输入框"
          style={{ width: '300px', marginRight: '10px' }}
          onChange={props.handleChange}
        />
        <Button type="primary" onClick={props.handleAdd}>
          提交
        </Button>
        <List
          style={{ width: '300px' }}
          bordered
          dataSource={props.dataObj}
          renderItem={(item, index) => (
            <List.Item
              onClick={(index) => {
                props.handleDel(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </React.Fragment>
    );

}
// class TodoListUi extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h3 style={{ marginBottom: 16 }}>TodoList</h3>
//         <Input
//           value={props.inputValue}
//           placeholder="todolist输入框"
//           style={{ width: '300px', marginRight: '10px' }}
//           onChange={props.handleChange}
//         />
//         <Button type="primary" onClick={props.handleAdd}>
//           提交
//         </Button>
//         <List
//           style={{ width: '300px' }}
//           bordered
//           dataSource={props.dataObj}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={(index) => {
//                 props.handleDel(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </React.Fragment>
//     );
//   }
// }
export default TodoListUi;
