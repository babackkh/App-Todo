import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { DialogDataModel } from 'src/app/model/data-model';


@Component({
  selector: 'app-todo-wrap',
  templateUrl: './todo-wrap.component.html',
  styleUrls: ['./todo-wrap.component.scss']
})
export class TodoWrapComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  openDialog() {
    let _dialogDataModel:DialogDataModel = {
      todoText: "",
      direction: "please fill",
      date: new Date()
    };
    let curTodo:string = "";
    const dialogRef = this.dialog.open(TodoAddComponent, { width: '500px', data: _dialogDataModel });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

