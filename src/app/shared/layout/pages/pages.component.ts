import { Component, OnInit } from '@angular/core';
import { CodePreviewDirective } from '../../directives/code-preview/code-preview.directive';

@Component({
  selector: 'dashboard-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
