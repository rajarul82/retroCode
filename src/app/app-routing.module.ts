import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecordsListComponent } from "./grid.component";
import { monitoringRecordsComponent } from "./monitoringRecords/monitoringRecords.component";
import { monitoringAlertsComponent } from "./monitoringAlerts/monitoringAlerts.component";
import { CustomhighchartComponent } from "./CustomChart/customhighchart.component";
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';

const appRoutes: Routes = [
  {
    path: "MonitoringRecords",
    component: monitoringRecordsComponent
  }, {
    path: "MonitoringAlerts",
    component: monitoringAlertsComponent
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    RecordsListComponent,
	CustomhighchartComponent,
    monitoringRecordsComponent,
    monitoringAlertsComponent
  ],
  imports: [CommonModule,
  ChartModule,
            RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
