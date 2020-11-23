import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallvaluesComponent } from './getallvalues.component';

describe('GetallvaluesComponent', () => {
  let component: GetallvaluesComponent;
  let fixture: ComponentFixture<GetallvaluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallvaluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});