import UPDATE_STRING from './constants';

const initialState = {
  inputString: '',
};

function updateReducer(state = initialState, action) {
  console.log('in reducer');
  switch (action.type) {
    case UPDATE_STRING:
      return action.inputString;
    default:
      return state;
  }
}

export default updateReducer;
