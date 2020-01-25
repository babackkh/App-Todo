import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material';

const MaterialComponents = [
  MatButton
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
