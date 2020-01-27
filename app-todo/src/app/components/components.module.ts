import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoWrapComponent } from './todo-wrap/todo-wrap.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../modules/material.module';


const ComponentsArray = [TodoAddComponent, TodoListComponent, TodoListItemComponent, TodoWrapComponent, DialogComponent];

@NgModule({
  declarations: ComponentsArray,
  entryComponents: [TodoAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: ComponentsArray
})
export class ComponentsModule { }
