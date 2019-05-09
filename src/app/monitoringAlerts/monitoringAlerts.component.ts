import { Component } from '@angular/core';
import { monitoringRecordService } from '../monitoringRecords/monitoringRecords.service';


@Component({
  selector: 'monitoring-alerts',
  templateUrl: './monitoringAlerts.component.html'
})

export class monitoringAlertsComponent {

  constructor(private recordService: monitoringRecordService) { }
  title = 'app';
  records = [];
  Alerts = [];

  headers = ['AlertName', 'City', 'StateCode', 'AlertDate'];

  getAlertRecords() {
    this.recordService.getAlertRecords()
      .subscribe(data => {
        this.setRecordsBindingModel(data);
      });
  }

  setRecordsBindingModel(monitoringAlerts: any) {
    if (monitoringAlerts == null) {
      return;
    }

    var records = monitoringAlerts.Alerts;
    records.forEach(function (value) {
      value.AlertName = { val: value.AlertName, isHighlight: true };
    })

    this.Alerts = records;
  }

  openAlertModal(debtorName: any) {
    alert(debtorName);
  }
}
