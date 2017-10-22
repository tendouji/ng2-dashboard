import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalServicesService {
  public bodyFixed:boolean = false;
  public bodyFixedEvent = new EventEmitter<boolean>();

  public dimmerVisible:boolean = false;
  public dimmerClickHandler:string = '';
  public showDimmerEvent = new EventEmitter<boolean>();
  
  public slideInPanelVisible:boolean = false;
  public slideInPanelType:string = '';
  public slideInPanelPosition:string = '';
  public showSlideInPanelEvent = new EventEmitter<boolean>();
  
  constructor() { }

  showDimmer(val: boolean) {
    this.setBodyFixed(val);
    this.dimmerVisible = val;
    this.showDimmerEvent.emit(val);
  }
  
  showSlideInPanel(val: any) {
    this.slideInPanelVisible = val.show;
    this.slideInPanelType = val.type;
    this.slideInPanelPosition = val.position;
    this.showSlideInPanelEvent.emit(val.show);
  }
  
  setBodyFixed(val: boolean) {
    this.bodyFixed = val;
    this.bodyFixedEvent.emit(val);
  }
}
