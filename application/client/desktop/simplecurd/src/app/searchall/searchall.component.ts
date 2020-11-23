import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-searchall',
  templateUrl: './searchall.component.html',
  styleUrls: ['./searchall.component.scss'],
})
export class SearchallComponent implements OnInit {

columnDefs = [
{headerName: 'Name', field: 'name'},
{headerName: 'Email', field: 'email'}];
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
private router: Router
  ) { }

  ngOnInit() {
    
  }

GpRoute(queryId) {
this.router.navigate(['/updateanddelete'], { queryParams: { 'id': queryId } });
}
onSelectionChanged(event) {
  const selectedRows = this.gridApi.getSelectedRows();
  this.GpRoute(selectedRows[0]._id);
}
onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}

}