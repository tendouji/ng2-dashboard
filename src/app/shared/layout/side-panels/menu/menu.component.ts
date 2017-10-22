import { Component, OnInit, Renderer, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'dashboard-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') menu: ElementRef;
  
  constructor(private renderer: Renderer) { }

  ngOnInit() { }
  
  ngAfterViewInit() {
    let liTag = this.menu.nativeElement.querySelectorAll('li.hasSubmenu');
    for(let i=0; i<liTag.length; i++) {
      let aTag = liTag[i].querySelectorAll('a');
  
      for(let j=0; j<aTag.length; j++) {
        if( aTag[j].classList.contains('active') ) {
          liTag[i].classList.add('active');
          break;
        }
      }
    }
  }

  toggleSubmenu(evt) {
    evt.preventDefault();
    let target = evt.srcElement,
      parentLiElm = this.findAncestor(target, 'hasSubmenu');

    setTimeout(() => {
      this.renderer.setElementClass(parentLiElm, 'open', !parentLiElm.classList.contains('open'))
    }, 5);
  
  }

  findAncestor(elm: HTMLElement, className: string) {
    while ((elm = elm.parentElement) && !elm.classList.contains(className));
    return elm;
  }

}
