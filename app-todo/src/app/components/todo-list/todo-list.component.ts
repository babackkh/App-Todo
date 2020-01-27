import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatCheckboxChange } from '@angular/material';
import { TodoServiceService } from 'src/app/service/todo-service.service';
import { DataModel } from 'src/app/model/data-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  checkboxValue: string;
  ifChecked = false;

  constructor(private todoData: TodoServiceService) { }
  todos: DataModel[] = this.todoData.getTodos();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
  onCheck(event: MatCheckboxChange) {
    this.checkboxValue = event.source.value;
    this.ifChecked = true;
  }

  deleteTodo(id: number) {
    this.todoData.deleteTodo(id);
    return this.todos;
  }

  ngOnInit() {
  }

}
