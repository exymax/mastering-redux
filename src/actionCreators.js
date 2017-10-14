import * as actionTypes from './actionTypes';

let lastTodoIndex = 0;

export function addTodo(content) {
    return {
        type: actionTypes.ADD_TODO,
        payload: {
            id: lastTodoIndex++,
            content,
        },
    };
}

export function toggleTodo(id) {
    return {
        type: actionTypes.TOGGLE_TODO,
        payload: {
            id,
        },
    };
}

export function removeTodo(id) {
    return {
        type: actionTypes.REMOVE_TODO,
        payload: {
            id,
        }
    };
}
