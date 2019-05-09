import { Component } from '@angular/core';
import { monitoringRecordService } from './monitoringRecords.service';


@Component({
  selector: 'monitoring-records',
  templateUrl: './monitoringRecords.component.html'
})

export class monitoringRecordsComponent {

  constructor(private recordService: monitoringRecordService) { }
  title = 'app';
  records = [];
  bindingData = [];

  headers = ['DebtorName', 'MonitoringTypeDesc', 'City', 'StateCode', 'StartDate', 'EndDate', 'EntityId'];

  getMonitoringRecords() {
    this.recordService.getMonitoringRecords()
      .subscribe(data => {
        this.setRecordsBindingModel(data);
      });
  }

  setRecordsBindingModel(monitoringRecords: any) {
    if (monitoringRecords == null) {
      return;
    }

    var records = monitoringRecords.MonitoringRecords;
    records.forEach(function (value) {
      value.DebtorName = { val: value.DebtorName, isHighlight: true };
    })

    this.bindingData = records;
  }

  openDebtorModal(debtorName: any) {
    alert(debtorName);
  }
}
