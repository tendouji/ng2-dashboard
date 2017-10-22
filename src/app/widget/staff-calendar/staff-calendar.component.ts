import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data/global-data.service';

@Component({
  selector: 'dashboard-staff-calendar',
  templateUrl: './staff-calendar.component.html',
  styleUrls: ['./staff-calendar.component.scss']
})
export class StaffCalendarComponent implements OnInit {
  @ViewChild('titleDates') titleDates: ElementRef;
  @ViewChild('staffNames') staffNames: ElementRef;

  calendarData: object;
  month: string;
  dates: Array<number>;

  constructor(
    private globalData: GlobalDataService
  ) { }

  ngOnInit() {
    this.calendarData = this.globalData.staffCalendarData;
    this.month = this.calendarData['month'];
    this.dates = Array(+this.calendarData['days']).fill(0);
  }

  isOffset(val: string): boolean {
    return (val == 'x');
  }

  isObject(val: string): boolean {
    return (typeof val == 'object');
  }

  isLeave(val: string): boolean {
    return (typeof val != 'undefined');
  }

  isWeekend(day: number): boolean {
    let weekendArr:Array<number> = this.calendarData['weekends'];
    return (weekendArr.indexOf(day)>-1);
  }

  isHoliday(day: number): boolean {
    let holidayArr: Array<any> = this.calendarData['holidays'], 
      tempArr: Array<any> = holidayArr.filter(item => {
        return (+Object.keys(item) == day);
      });
    return (tempArr.length > 0);
  }
  
  getHoliday(day: number): string {
    let holidayArr: Array<any> = this.calendarData['holidays'], 
    tempArr: Array<any> = holidayArr.filter(item => {
      return (+Object.keys(item) == day);
    });
    return tempArr[0][day];
  }

  calenderScrollHandler(evt) {
    var elm = evt.target;
    this.titleDates.nativeElement.scrollLeft = elm.scrollLeft;
    this.staffNames.nativeElement.scrollTop = elm.scrollTop;
  }
}
