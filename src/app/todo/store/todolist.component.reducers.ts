import { Action } from '@ngrx/store';
import { Todo } from '../shared/todo';
import * as TodoListActions from './todolist.component.actions';

export interface State {
    todos: Todo[];
}

const initialState: State = {
    todos: [
        new Todo('Make Coffee in the morning', 'IN_PROGRESS', new Date(), new Date()),
        new Todo('take the car out from the mall', 'PENDING', new Date(), new Date()),
        new Todo('pick the car and go home', 'PENDING', new Date(), new Date()),
    ]
};

export function todoListReducer(state = initialState, action: TodoListActions.TodoListActions) {
    switch (action.type) {
        case TodoListActions.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case TodoListActions.UPDATE_TODO:
            const todo = state.todos[action.payload.index];
            const updatedTodo = {
                ...todo,
                ...action.payload.todo
            };
            const todos = [...state.todos];
            todos[action.payload.index] = updatedTodo;
            return {
                ...state,
                todos: todos
            };
        case TodoListActions.DELETE_TODO:
            const oldTodos = state.todos;
            oldTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: oldTodos
            };
        default:
            return state;
    }
}
