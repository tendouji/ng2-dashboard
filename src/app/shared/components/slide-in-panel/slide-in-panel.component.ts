import { Component, OnInit, Input, Renderer, ElementRef, ViewChild } from '@angular/core';
import { GlobalServicesService } from '../../services/global-services/global-services.service';
import { GlobalDataService } from '../../services/global-data/global-data.service';

@Component({
  selector: 'dashboard-slide-in-panel',
  templateUrl: './slide-in-panel.component.html',
  styleUrls: ['./slide-in-panel.component.scss']
})
export class SlideInPanelComponent implements OnInit {
  @ViewChild('slideInPanel') slideInPanel: ElementRef;
  @Input('show') show: boolean;
  @Input('position') position:string;

  constructor(
    private renderer: Renderer, 
    private globalData: GlobalDataService,
    private globalServices: GlobalServicesService
  ) { }

  ngOnInit() { }

  ngOnChanges() {
    if(this.show) {
      this.renderer.setElementStyle(this.slideInPanel.nativeElement, 'display', 'block');
      this.renderer.setElementClass(this.slideInPanel.nativeElement, this.position, this.show);
      this.renderer.setElementAttribute(this.slideInPanel.nativeElement, 'id', this.globalServices.slideInPanelType);
      setTimeout(() => {
        this.renderer.setElementClass(this.slideInPanel.nativeElement, 'show', this.show);
      }, 0);
      return;
    }
    this.renderer.setElementClass(this.slideInPanel.nativeElement, 'show', this.show);
    setTimeout(() => {
      this.renderer.setElementClass(this.slideInPanel.nativeElement, this.position, this.show);
      this.renderer.setElementAttribute(this.slideInPanel.nativeElement, 'id', '');
      this.renderer.setElementStyle(this.slideInPanel.nativeElement, 'display', 'none');
    }, this.globalData.transitionTimeStandard);
  }

  closeSlideInPanel(evt) {
    evt.preventDefault();
    this.globalServices.showSlideInPanel({'show':false, 
                                          'type':'', 
                                          'position': this.globalServices.slideInPanelPosition});
    this.globalServices.showDimmer(false);
    this.globalServices.dimmerClickHandler = '';
  }
}
