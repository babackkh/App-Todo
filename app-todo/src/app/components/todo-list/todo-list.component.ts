import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { TodoServiceService } from 'src/app/service/todo-service.service';
import { DataModel } from 'src/app/model/data-model';
import { FadeIn } from 'src/app/modules/animations.module';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [FadeIn]
})
export class TodoListComponent {
  checkboxValue: string;
  ifChecked = false;

  constructor(private todoData: TodoServiceService) { }

  todos: DataModel[] = this.todoData.getTodos();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  deleteTodo(id: number) {
    this.todoData.deleteTodo(id);
  }
}
