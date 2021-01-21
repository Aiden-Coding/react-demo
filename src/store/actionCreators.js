import { CHANGE_INPUT_INPUTVALUE, ADD_TODO_ITEM, DEL_DATA, CLEAN_DATA } from './actionType';

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
  type: CLEAN_DATA
});
