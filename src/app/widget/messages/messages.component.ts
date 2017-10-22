import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data/global-data.service';
import { DashboardData } from '../../shared/models/data.model';

@Component({
  selector: 'dashboard-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  dataList: Array<DashboardData.MessageObject> = [];
  sortedList: Array<DashboardData.MessageObject> = [];
  keyTitle: Array<object> = [];
  sortDirection: object = {};
  initialKey: string = 'id';

  constructor(
    private globalData: GlobalDataService
  ) { }

  ngOnInit() {
    this.dataList = this.globalData.messageList;
    this.keyTitle = [
      {label: 'action', sortable: false, isIcon: true, iconName: 'font_download'}, 
      {label: 'from', sortable: true, isIcon: false}, 
      {label: 'message', sortable: false, isIcon: false}, 
      {label: 'time', sortable: true, isIcon: false}, 
      {label: 'priority', sortable: true, isIcon: true, iconName: 'error_outline'}
    ];
    this.sortColumn(null, this.initialKey);
  }
  
  sortColumn(evt, key: string) {
    if(evt) evt.preventDefault();
    
    this.sortedList = this.sortList(key);
    let isAsc = this.getSetSortingOrder(key);
    
    if(!isAsc) {
      this.sortedList.reverse();
    }
  }
  
  getSetSortingOrder(key: string) {
    if(typeof this.sortDirection[key] == 'undefined') {
      // havent set any
      this.sortDirection[key] = true;
    } else {
      this.sortDirection[key] = !this.sortDirection[key];
    }
    return this.sortDirection[key];
  }

  sortList(key: string) {
    // sort as ASC
    function compare(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    }
    
    let arr = this.dataList;
    return arr.sort(compare);
  }

}
