import { Component, OnInit, Input, ElementRef, ViewChild, Renderer } from '@angular/core';
import { GlobalDataService } from '../../../shared/services/global-data/global-data.service';

@Component({
  selector: 'dashboard-site-preloader',
  templateUrl: './site-preloader.component.html',
  styleUrls: ['./site-preloader.component.scss']
})
export class SitePreloaderComponent implements OnInit {
  @Input('siteAssetList') siteAssetList: Array<string>;
  @Input('siteAssetURL') siteAssetURL: string;
  @ViewChild('sitePreloader') sitePreloader: ElementRef;
  sitePreloaderLine: HTMLDivElement;
  preloaderCounter: number = 0;
  preloaderPercentage: number = 0;

  constructor(
    private renderer: Renderer, 
    private globalData: GlobalDataService
  ) { }

  ngOnInit() {
    this.sitePreloaderLine = this.sitePreloader.nativeElement.querySelector('.preloader-line');

    let percentageSegment: number = 100 / this.siteAssetList.length;

    for(let item in this.siteAssetList) {
      this.preloadContent(item)
        .then(index => {
          this.preloaderCounter++;
          this.preloaderPercentage = percentageSegment * this.preloaderCounter;

          this.renderer.setElementStyle(this.sitePreloaderLine, 'width', this.preloaderPercentage+'%');

          if(this.preloaderPercentage >= 100) {
            // delay to let user see 100% loaded before start site
            setTimeout(() => this.startSite(), 800);
          }
        })
        .catch(error => {
          console.log('Error!', error);
          return;
        });
    }
  }

  preloadContent(item: string) {
    var url = this.siteAssetURL + this.siteAssetList[item] + '?' + (+ new Date());
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = () => resolve(item);
      img.onerror = () => reject(url + ' not loading.');
      img.src = url;
    })
  }

  startSite() {
    this.renderer.setElementClass(this.sitePreloader.nativeElement, 'hide', true);
    setTimeout(() => {
      this.renderer.setElementClass(window.document.body, 'fixed', false);
      this.sitePreloader.nativeElement.remove();
    }, this.globalData.transitionTimeStandard);
    
  }
}
