import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInPanelComponent } from './slide-in-panel.component';

describe('SlideInPanelComponent', () => {
  let component: SlideInPanelComponent;
  let fixture: ComponentFixture<SlideInPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideInPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideInPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
