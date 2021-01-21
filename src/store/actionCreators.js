import { CHANGE_INPUT_INPUTVALUE, ADD_TODO_ITEM, DEL_DATA, CLEAN_DATA } from './actionType';
import axios from 'axios';
import store from './index';
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_INPUTVALUE,
  value,
});

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM,
});

export const getDelData = (index) => ({
  type: DEL_DATA,
  index,
});

export const getCleanData = () => ({
  type: CLEAN_DATA,
});

export const getAjax = (index) => ({
  type: CLEAN_DATA,
});
export const getTodoList = () => {
  // return () => {
  //   axios.get('../../todoList.json').then((res) => {
  //     const data = res.data;
  //     const action = getAjax(data);
  //     store.dispatch(action);
  //   });
  // };
  return (dispatch) => {
    axios.get('../../todoList.json').then((res) => {
      const data = res.data;
      const action = getAjax(data);
      dispatch(action);
    });
  };
};
