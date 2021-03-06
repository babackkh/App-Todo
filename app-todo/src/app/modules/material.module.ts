import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';

const MaterialComponents = [
  LayoutModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatGridListModule,
  DragDropModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
