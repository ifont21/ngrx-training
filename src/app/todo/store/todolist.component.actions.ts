import { Action } from '@ngrx/store';
import { Todo } from '../shared/todo';

export const ADD_TODO = 'ADD_TODO';

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    payload: Todo;
}

export type TodoListActions = AddTodo;
