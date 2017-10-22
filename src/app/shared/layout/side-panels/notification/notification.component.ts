import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../../../shared/services/global-data/global-data.service';
import { DashboardData } from '../../../models/data.model';

@Component({
  selector: 'dashboard-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notificationList: Array<DashboardData.NotificationObj>;

  constructor(private globalData: GlobalDataService) { }

  ngOnInit() {
    this.notificationList = this.globalData.notificationList;
  }
}
