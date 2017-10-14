import * as actionTypes from './actionTypes';

const initialState = {
    todos: []
};

export function todoAppReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        content: action.payload.content,
                        completed: false,
                    },
                ],
            };

        case actionTypes.TOGGLE_TODO:
            return {
                todos: state.todos.map((todo) => {
                    return todo.id === action.payload.id ?
                    {
                        ...todo,
                        completed: !todo.completed,
                    } : todo;
                })
            };

        case actionTypes.REMOVE_TODO:
            return {
                todos: state.todos.filter((todo) => (
                    todo.id !== action.payload.id
                )),
            };

        default:
            return state;
    }
}
