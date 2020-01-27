import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { TodoAddComponent } from '../todo-add/todo-add.component';


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
    const dialogRef = this.dialog.open(TodoAddComponent, { width: '500px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

