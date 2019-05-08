import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RecordsListComponent } from './grid.component';
import { monitoringRecordService } from './monitoringRecords.service';

@NgModule({
  declarations: [
    AppComponent,
    RecordsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [monitoringRecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
