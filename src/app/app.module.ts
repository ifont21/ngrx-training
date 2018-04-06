import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { TodoaddComponent } from './todo/todoadd/todoadd.component';
import { todoListReducer } from './todo/store/todolist.component.reducers';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodolistComponent,
    TodoaddComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ todoList: todoListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
