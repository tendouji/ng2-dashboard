import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCalendarComponent } from './staff-calendar.component';

describe('StaffCalendarComponent', () => {
  let component: StaffCalendarComponent;
  let fixture: ComponentFixture<StaffCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
