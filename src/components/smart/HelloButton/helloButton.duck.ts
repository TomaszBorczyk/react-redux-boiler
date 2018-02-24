import {Action, createAction, handleActions} from 'redux-actions';
import {HelloState} from './HelloState';

export const UPDATE_HELLO_MESSAGE = 'UPDATE_HELLO_MESSAGE';
export const messageOnHello = createAction<string>(UPDATE_HELLO_MESSAGE);

const defaultState: HelloState = {
  message: 'Default hello message'
};

export const hello = handleActions<HelloState, {}>({
  [UPDATE_HELLO_MESSAGE]: (state, action: Action<string>) => ({...state, message: action.payload})
}, defaultState);
