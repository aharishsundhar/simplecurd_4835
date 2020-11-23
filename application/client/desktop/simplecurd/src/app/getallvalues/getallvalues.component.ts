import { Component, OnInit } from '@angular/core';

import { GetallvaluesService } from './getallvalues.service';



@Component({
  selector: 'app-getallvalues',
  templateUrl: './getallvalues.component.html',
  styleUrls: ['./getallvalues.component.scss'],
})
export class GetallvaluesComponent implements OnInit {

columnDefs = [
{headerName: 'Name', field: 'name'},
{headerName: 'email', field: 'email'}];
user = {
   name: '',
   email: ''
};
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(
private getallvaluesService: GetallvaluesService
  ) { }

  ngOnInit() {
    this.GpGetAllValues();
  }

onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}
GpGetAllValues() {
 this.getallvaluesService.GpGetAllValues()
  .subscribe(
    data => {
       console.log('successfully get all data --- ', data);
       this.rowData = data;
    },
    error => {
       console.log('cannot able to get all data --- ', error);
    }
    );
}

}