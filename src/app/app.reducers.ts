import * as fromTodoList from './todo/store/todolist.component.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    todoList: fromTodoList.State;
}

export const reducers: ActionReducerMap<AppState> = {
    todoList: fromTodoList.todoListReducer
};
