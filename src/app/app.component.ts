import { Component } from '@angular/core';
import { monitoringRecordService } from './monitoringRecords.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private recordService: monitoringRecordService) { }
  title = 'app';
  records = [];
  bindingData = [];

  headers = ['DebtorName', 'MonitoringTypeDesc', 'City', 'StateCode', 'StartDate', 'EndDate', 'EntityId'];

  getMonitoringRecords() {
    this.recordService.getMonitoringRecords()
      .subscribe(data => {
        this.setRecordsBindingModel(JSON.parse(data));
      });
  }

  setRecordsBindingModel(monitoringRecords: any) {
    if (monitoringRecords == null) {
      return;
    }

    var records = monitoringRecords.MonitoringRecords;
    records.forEach(function (value) {
      value.DebtorName = {val : value.DebtorName, isHighlight : true};
    })

    this.bindingData = records;
  }

  openDebtorModal(debtorName: any) {
    alert(debtorName);
  }
}
