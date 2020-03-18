import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitationResourcesComponent } from './facilitation-resources.component';

describe('FacilitationResourcesComponent', () => {
  let component: FacilitationResourcesComponent;
  let fixture: ComponentFixture<FacilitationResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitationResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitationResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
