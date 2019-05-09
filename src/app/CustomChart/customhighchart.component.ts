import { Component, OnInit } from '@angular/core';
import { Options } from 'highcharts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-customhighchart',
  templateUrl: './customhighchart.component.html',
  styleUrls: ['./customhighchart.component.css']
})
export class CustomhighchartComponent implements OnInit {
  constructor() { }
  tempData: any = [
    {
      name: 'Active',
      y: 20.8,
      sliced: true,
      selected: true,
      color: '#6fb745'
    },
    {
      name: 'Suspended', y: 5,
      color: '#1c94c4'
    },
    {
      name: 'Unresolved', y: 10, color: '#d32424'
    }];
  chart = new Chart({

    chart: {
      type: 'pie',
      plotBorderWidth: null,
      plotShadow: false,
      renderTo: 'piecontainer',
      borderWidth: 0,
      marginLeft: 0,
      marginTop: 0,
      animation: {
        easing: 'easeOutBounce',
        duration: 1
      },
      backgroundColor: '#ededed',
      height: 240,
      width: 300
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'hand',

        dataLabels: {
          enabled: false
        },

        showInLegend: true
      }
    },
    series: [{
        name: 'Monitoring Portfolio',
        data: this.tempData
        }]

  });

  ngOnInit() {
  }

}
