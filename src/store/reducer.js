const defaultState = {
  inputValue: '',
  list: [],
};

export default (state = defaultState, actions) => {
  console.log(state, actions);

  if (actions.type === 'change_input_value') {
    //做一个深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = actions.value;

    return newState;
  }

  if (actions.type === 'add_item') {
    //做一个深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
};
