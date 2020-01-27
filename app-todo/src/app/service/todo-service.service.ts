import { Injectable } from '@angular/core';
import { DataModel } from '../model/data-model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos: DataModel[] = [];

  constructor() { }

  getTodos() {
    return this.todos;
  }
  addTodo(data: DataModel) {
    return this.todos.push(data);
  }
  deleteTodo(id: number) {
    const index = id - 1;
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    return this.todos;
  }
}
