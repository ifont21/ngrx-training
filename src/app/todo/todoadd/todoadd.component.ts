import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../shared/todo';
import * as TodoListActions from '../store/todolist.component.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.scss']
})
export class TodoaddComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<{ todoList: { todos: Todo[] } }>) { }

  ngOnInit() {
    this.form = this.fb.group({
      description: ''
    });
  }

  onSubmit() {
    const payload = this.form.value;
    payload.status = 'PENDING';
    payload.createdAt = new Date();

    this.store.dispatch(new TodoListActions.AddTodo(payload));
    this.form.reset();
  }

}
