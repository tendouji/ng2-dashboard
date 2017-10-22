import { Component, OnInit, Input, Renderer, ElementRef, ViewChild, HostListener } from '@angular/core';
import { GlobalDataService } from '../../services/global-data/global-data.service';

@Component({
  selector: 'dashboard-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {
  @Input('linkContent') linkContent: string;
  @Input('linkTitle') linkTitle: string;
  @Input('linkClass') linkClass: string;
  @Input('popupWidth') popupWidth: number;
  @ViewChild('popupModal') popupModal: ElementRef;

  contentMaxHeight: number = 0;
  linkText: string;

  constructor(
    private renderer: Renderer,
    private globalData: GlobalDataService
  ) { }

  @HostListener('window:resize', ['$event'])
  windowResizeHandler(evt) {
    let winHeight = window.innerHeight;
    this.contentMaxHeight = winHeight - (10 * this.globalData.paddingLarge);
  }

  ngOnInit() { 
    this.windowResizeHandler(null);
  }

  openPopupModal(evt) {
    evt.preventDefault();
    this.windowResizeHandler(evt);
    this.renderer.setElementClass(window.document.body, 'fixed', true);
    this.renderer.setElementStyle(this.popupModal.nativeElement, 'display', 'block');
    this.renderer.setElementStyle(this.popupModal.nativeElement.querySelector('.popup-modal'), 'max-width', this.popupWidth+'px');
    setTimeout(()=>{
      this.renderer.setElementClass(this.popupModal.nativeElement, 'show', true);
    }, 0);
  } 

  closePopupModal(evt) {
    evt.preventDefault();
    this.renderer.setElementClass(this.popupModal.nativeElement, 'show', false);
    setTimeout(()=>{
      this.renderer.setElementStyle(this.popupModal.nativeElement, 'display', 'none');
      this.renderer.setElementStyle(this.popupModal.nativeElement.querySelector('.popup-modal'), 'max-width', 'none');
      this.renderer.setElementClass(window.document.body, 'fixed', false);
    }, this.globalData.transitionTimeStandard);
  } 

}
