import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityConnectionsComponent } from './community-connections.component';

describe('CommunityConnectionsComponent', () => {
  let component: CommunityConnectionsComponent;
  let fixture: ComponentFixture<CommunityConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
