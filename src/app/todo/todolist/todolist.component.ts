import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';
import * as TodoListActions from '../store/todolist.component.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public todoListState: Observable<{ todos: Todo[] }>;

  constructor(private store: Store<{ todoList: { todos: Todo[] } }>) { }

  ngOnInit() {
    this.todoListState = this.store.select('todoList');
  }

  onStatusChange(event, i, todo) {
    todo.updatedAt = new Date();
    this.store.dispatch(new TodoListActions.UpdateTodo({ index: i, todo: todo }));
  }


}
