import { Component, OnInit, ElementRef, ViewChild, Renderer, ViewEncapsulation } from '@angular/core';
import { GlobalDataService } from '../../services/global-data/global-data.service';
import { GlobalServicesService } from '../../services/global-services/global-services.service';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,  
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header: ElementRef;
  @ViewChild('searchKeyInput') searchKeyInput: ElementRef;

  noticeCount: number = 0;
  userImage:string = '';
  searchKeyStr:string = '';

  constructor(
    private renderer: Renderer, 
    private globalData: GlobalDataService, 
    private globalServices: GlobalServicesService 
  ) { }

  ngOnInit() {
    this.userImage = this.globalData.userObj['photo'];
    this.noticeCount = this.globalData.notificationList.length;
  }

  showSearch(evt) {
    evt.preventDefault();
    this.renderer.setElementClass(this.header.nativeElement, 'show-search', true);
    this.searchKeyInput.nativeElement.focus();
    this.globalServices.showDimmer(true);
    this.globalServices.dimmerClickHandler = 'hideSearch';
  }
  
  hideSearch(evt) {
    evt.preventDefault();
    this.renderer.setElementClass(this.header.nativeElement, 'show-search', false);
    setTimeout(()=>{
      this.searchKeyInput.nativeElement.value = '';
      this.searchKeyInput.nativeElement.blur();
      this.globalServices.showDimmer(false);
      this.globalServices.dimmerClickHandler = '';
    }, this.globalData.transitionTimeStandard);
  }

  showSlideInPanel(evt, type: string, position?: string) {
    evt.preventDefault();
    this.globalServices.showSlideInPanel({'show': true, 
                                          'type': type, 
                                          'position': (position? position : 'right')
                                        });
    this.globalServices.showDimmer(true);
    this.globalServices.dimmerClickHandler = 'hideSlideInPanel';
  }

  hideSlideInPanel(evt) {
    evt.preventDefault();
    this.globalServices.showSlideInPanel({'show':false, 
                                          'type':'', 
                                          'position': this.globalServices.slideInPanelPosition
                                        });
    this.globalServices.showDimmer(false);
    this.globalServices.dimmerClickHandler = '';
  }

}
