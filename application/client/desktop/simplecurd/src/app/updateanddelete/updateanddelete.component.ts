import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UpdateanddeleteService } from './updateanddelete.service';



@Component({
  selector: 'app-updateanddelete',
  templateUrl: './updateanddelete.component.html',
  styleUrls: ['./updateanddelete.component.scss'],
})
export class UpdateanddeleteComponent implements OnInit {

queryId: string;
user = {
   name: '',
   email: ''
};

  constructor(
private activatedRoute: ActivatedRoute,
private updateanddeleteService: UpdateanddeleteService
  ) { }

  ngOnInit() {
    this.activatedRoute
 .queryParams
 .subscribe(params => {
 this.queryId = params.id;
 this.GpSearch();
});
this.GpGetNounById();
  }

GpGetNounById() {
 this.updateanddeleteService.GpGetNounById(this.queryId)
  .subscribe(
    data => {
       console.log('successfully get the data by id --- ', data);
       this.user = data;
    },
    error => {
       console.log('cannot able to get the data using its id--- ', error);
    }
    );
}
GpSearch() {
 this.updateanddeleteService.GpSearch(this.user)
  .subscribe(
    data => {
       console.log('data searched successfully --- ', data);
       this.rowData = data;
    },
    error => {
       console.log('cannot able to search the data --- ', error);
    }
    );
}

}