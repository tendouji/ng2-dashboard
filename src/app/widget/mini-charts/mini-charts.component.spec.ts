import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniChartsComponent } from './mini-charts.component';

describe('MiniChartsComponent', () => {
  let component: MiniChartsComponent;
  let fixture: ComponentFixture<MiniChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
