import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data/global-data.service';
import { DashboardData } from '../../shared/models/data.model';

@Component({
  selector: 'dashboard-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  dataList: Array<DashboardData.UserObject> = [];
  sortedList: Array<DashboardData.UserObject> = [];
  keyTitle: Array<string> = [];
  sortDirection: object = {};
  initialKey: string = 'id';

  constructor(
    private globalData: GlobalDataService
  ) { }

  ngOnInit() {
    this.dataList = this.globalData.staffList;
    //this.keyTitle = Object.keys(this.dataList[0]);
    this.keyTitle = ['id', '', 'name', 'position', 'department'];
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
