import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'dashboard-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.scss']
})
export class DashboardPanelComponent implements OnInit {
  @Input('size') size: string;
  @Input('icon') icon: string = 'class';
  @Input('title') title: string;
  @Input('hasFooter') hasFooter: boolean = false;

  constructor(
    private elm: ElementRef, 
    private renderer: Renderer
  ) { }
  
  ngOnInit() {
    if(this.hasFooter) {
      let mainContainer = this.elm.nativeElement.querySelector('.dashboard-panel-content');
      this.renderer.setElementClass(mainContainer, 'has-footer', true);
    }
  }
}
