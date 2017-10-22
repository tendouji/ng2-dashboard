import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePreloaderComponent } from './site-preloader.component';

describe('SitePreloaderComponent', () => {
  let component: SitePreloaderComponent;
  let fixture: ComponentFixture<SitePreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
