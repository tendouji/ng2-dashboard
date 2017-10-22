import { Component, OnInit, ViewChild, ElementRef, Renderer, Input } from '@angular/core';

@Component({
  selector: 'dashboard-mini-charts',
  templateUrl: './mini-charts.component.html',
  styleUrls: ['./mini-charts.component.scss']
})
export class MiniChartsComponent implements OnInit {
  @ViewChild('performanceChart') performanceChart: ElementRef;
  @ViewChild('managementChart') managementChart: ElementRef;
  @ViewChild('visitChart') visitChart: ElementRef;
  @ViewChild('userChart') userChart: ElementRef;
  @ViewChild('purchaseChart') purchaseChart: ElementRef;
  @ViewChild('signupChart') signupChart: ElementRef;
  @Input('chart') chart: string;

  /* simple line chart data */
  sampleChartData = {
    'performance': {
      dataSet: [65, 59, 80, 81, 56, 55, 40],
      average: 0, 
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Performance",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(200,100,235,.8)'
          }
        ] 
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }, 
    'management': {
      type: 'bar',
      data: {
        labels: ["ICT", "Fin", "Mkt", "Inf", "Lgt", "Dsg"],
        datasets: [{
          label: '# of Completed Sprint',
          data: [22, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }, 
        responsive: true,
        maintainAspectRatio: false
      }
    }, 
    'visit': {
      type: 'doughnut',
      count: 62374, 
      data: {
        labels: ['New Visits'],
        datasets: [{
          data: [85, 15],
          backgroundColor: [
            '#0c0',
            'rgba(0,204,0,0.1)'
          ],
          hoverBackgroundColor: [
            '#3ec556',
            'rgba(0,204,0,0.1)'
          ],
          borderWidth: [0, 0]
        }]
      },
      options: {
        cutoutPercentage: 70, 
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animationRotate: true,
          duration: 2000
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    }, 
    'user': {
      type: 'doughnut',
      count: 7256, 
      data: {
        labels: ['Active Users'],
        datasets: [{
          data: [48, 52],
          backgroundColor: [
            '#F7464A',
            'rgba(0,204,0,0.1)'
          ],
          hoverBackgroundColor: [
            '#FA595D',
            'rgba(0,204,0,0.1)'
          ],
          borderWidth: [0, 0]
        }]
      },
      options: {
        cutoutPercentage: 70, 
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animationRotate: true,
          duration: 2000
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    }, 
    'purchase': {
      type: 'doughnut',
      count: 3274, 
      data: {
        labels: ['No. of Purchases'],
        datasets: [{
          data: [35, 65],
          backgroundColor: [
            '#46BFBD',
            'rgba(0,204,0,0.1)'
          ],
          hoverBackgroundColor: [
            '#59D2D0',
            'rgba(0,204,0,0.1)'
          ],
          borderWidth: [0, 0]
        }]
      },
      options: {
        cutoutPercentage: 70, 
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animationRotate: true,
          duration: 2000
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    }, 
    'signup': {
      type: 'doughnut',
      count: 3716, 
      data: {
        labels: ['New Signups'],
        datasets: [{
          data: [38, 62],
          backgroundColor: [
            '#FDB45C',
            'rgba(0,204,0,0.1)'
          ],
          hoverBackgroundColor: [
            '#FFC76F',
            'rgba(0,204,0,0.1)'
          ],
          borderWidth: [0, 0]
        }]
      },
      options: {
        cutoutPercentage: 70, 
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animationRotate: true,
          duration: 2000
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    }
  }

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    if(this.chart == 'performanceChart') {
      this.setChartHeight(this.chart, 120);
      this.getAveragePerformance();
    }
    if(this.chart == 'managementChart') {
      this.setChartHeight(this.chart, 125);
    }
    if(this.chart == 'visitChart' || 
        this.chart == 'purchaseChart' || 
        this.chart == 'userChart' || 
        this.chart == 'signupChart') {
      this.setChartHeight(this.chart, 200);
    }
  }
  
  setChartHeight(chartName: string, height: number) {
    setTimeout(() => {
      let elm = this[chartName].nativeElement;
      let chart = elm.querySelector('canvas');
      this.renderer.setElementStyle(chart, 'height', (height+'px'));
    }, 0);
  }

  getAveragePerformance() {
    // get average performance for the last 6 months;
    let sum = 0, 
      months = 6,
      chartData = this.sampleChartData['performance'];
    for(let i=chartData.dataSet.length-1; i>chartData.dataSet.length-(months+1); i--) {
      sum += chartData.dataSet[i];
    }
    chartData.average = sum / months;
  }
}
