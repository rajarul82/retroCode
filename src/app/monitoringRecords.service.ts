import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class monitoringRecordService {

  constructor(private http: HttpClient) { }

  getMonitoringRecords() {
    return this.http.get("./assets/sample.txt", { responseType:'text' });
  }
}
