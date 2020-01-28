import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDataModel, DataModel} from '../../model/data-model';
import { TodoServiceService } from 'src/app/service/todo-service.service';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  private lastId:number;  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogDataModel,    
    public dialogRef: MatDialogRef<TodoAddComponent>,
    private todoServiceData: TodoServiceService
    ) {}

  ngOnInit(): void {
    const todos = this.todoServiceData.getTodos();
    this.lastId = todos && todos.length > 0 ? todos[todos.length - 1].id : 0;
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onSave(data: DialogDataModel) {
    this.todoServiceData.addTodo({id: this.lastId++, title: data.todoText, done: false});
    this.dialogRef.close();
    console.log(this.todoServiceData.getTodos());
  }


}
