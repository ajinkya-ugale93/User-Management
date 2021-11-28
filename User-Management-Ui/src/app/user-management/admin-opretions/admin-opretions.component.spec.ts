import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpretionsComponent } from './admin-opretions.component';

describe('TempComponent', () => {
  let component: AdminOpretionsComponent;
  let fixture: ComponentFixture<AdminOpretionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpretionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpretionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
