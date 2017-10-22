import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../../../shared/services/global-data/global-data.service';

@Component({
  selector: 'dashboard-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userID:string;
  userImage:string;
  userName:string;
  userPosition:string;
  userDepartment:string;
  
  constructor(private globalData: GlobalDataService) { }
  
  ngOnInit() {
    this.userID = this.globalData.userObj['id'];
    this.userImage = this.globalData.userObj['photo'];
    this.userName = this.globalData.userObj['name'];
    this.userPosition = this.globalData.userObj['position'];
    this.userDepartment = this.globalData.userObj['department'];
  }
}
