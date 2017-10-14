import {createStore} from 'redux';
import {todoAppReducer} from './reducers';
import * as actionCreators from './actionCreators';

const store = createStore(todoAppReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

console.log('Initial State of the App: ', store.getState());

store.dispatch(
    actionCreators.addTodo('Hello World TODO!')
);

store.dispatch(
    actionCreators.addTodo('First real todo')
);

store.dispatch(
    actionCreators.addTodo('Second real todo')
);

store.dispatch(
    actionCreators.addTodo('Third real todo')
);

store.dispatch(actionCreators.toggleTodo(1));
store.dispatch(actionCreators.toggleTodo(3));
store.dispatch(actionCreators.removeTodo(2));

unsubscribe();
