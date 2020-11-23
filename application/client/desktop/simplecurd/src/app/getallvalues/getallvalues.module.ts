import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallvaluesComponent } from './getallvalues.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule,
RouterModule.forChild([
            {path: '', component: GetallvaluesComponent}
          ]),
AgGridModule
],
  declarations: [
  GetallvaluesComponent
]
  
})
export class GetallvaluesModule { }