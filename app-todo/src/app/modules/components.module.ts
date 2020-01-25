import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAddComponent } from '../components/todo-add/todo-add.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoDialogueComponent } from '../components/todo-dialogue/todo-dialogue.component';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoListComponent,
    TodoDialogueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
