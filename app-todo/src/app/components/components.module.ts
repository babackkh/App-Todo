import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoWrapComponent } from './todo-wrap/todo-wrap.component';
import { MaterialModule } from '../modules/material.module';


const ComponentsArray = [TodoAddComponent, TodoListComponent, TodoWrapComponent];

@NgModule({
  declarations: ComponentsArray,
  entryComponents: [TodoAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: ComponentsArray
})
export class ComponentsModule { }
