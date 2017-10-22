import { Component, ViewChild, Renderer } from '@angular/core';
import { GlobalServicesService } from './shared/services/global-services/global-services.service';
import { HeaderComponent } from './shared/layout/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('headerComponent') headerComponent: HeaderComponent;
  
  siteAssetURL = 'assets/img/';
  siteAssets = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', 
                'sample-user.jpg', 'sample-user-2.jpg', 'sample-user-3.png', 'sample-user-4.png', 'standard-user.png'];

  showDimmer: boolean = false;
  dimmerClickHandler: string = '';

  showSlideInPanel: boolean = false;
  slideInPanelType: string = '';
  slideInPanelPosition: string = 'right';

  constructor(
    protected renderer: Renderer, 
    protected globalServices: GlobalServicesService, 
    private router:Router
  ) { 
    globalServices.bodyFixedEvent.subscribe(val => this.onBodyFixed(val));
    globalServices.showDimmerEvent.subscribe(val => this.onShowDimmer(val));
    globalServices.showSlideInPanelEvent.subscribe(val => this.onShowSlideInPanel(val));

    router.events.subscribe(data => {
      if(this.globalServices.dimmerClickHandler != '') {
        this.callFunction(new MouseEvent('click'));
      }
    });
  }

  onBodyFixed(val:boolean) {
    this.renderer.setElementClass(window.document.body, 'fixed', this.globalServices.bodyFixed);
  }

  onShowDimmer(val:boolean) {
    this.showDimmer = this.globalServices.dimmerVisible;
  }

  onShowSlideInPanel(val:boolean) {
    this.showSlideInPanel = this.globalServices.slideInPanelVisible;
    this.slideInPanelType = this.globalServices.slideInPanelType;
    this.slideInPanelPosition = this.globalServices.slideInPanelPosition;
  }

  callFunction(evt) {
    this.headerComponent[this.globalServices.dimmerClickHandler].call(this.headerComponent, evt);
  }
}
