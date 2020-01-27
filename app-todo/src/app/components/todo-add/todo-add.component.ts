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
  constructor(
    public dialogRef: MatDialogRef<TodoAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataModel,
    private todoServiceData: TodoServiceService) {}
  ngOnInit(): void {
    const todos = this.todoServiceData.getTodos();
    const lastId = todos[todos.length - 1].id;
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onSave(data: DialogDataModel) {
    this.todoServiceData.addTodo({id: 5 + 1, title: data.todoText, done: false});
    this.dialogRef.close();
    console.log(this.todoServiceData.getTodos());
  }


}
