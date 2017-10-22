import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'dashboard-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {
  @ViewChild('table') table: ElementRef;

  output:string = 'output';

  constructor(private renderer: Renderer) { }

  ngOnInit() { }
    
}
