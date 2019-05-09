import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'records-list',
  template: `
<div class="wk-row">
  <table class="wk-table resultTable">
    <thead>
      <tr>
        <th *ngFor="let col of headers">
          <div class="wk-col-12">
            <div class="wk-col-10">
              <a style="color: #474747; cursor: pointer;">{{col}}</a>
            </div>
            <div class="wk-col-2">
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <ng-container *ngIf="bindingData.length > 0">
        <tr *ngFor="let info of bindingData">
          <td *ngFor="let col of headers">
            <a [attr.title]="info[col]"
               *ngIf="info[col] !== null && info[col].isHighlight != undefined"
               class="wk-text-overflow"
(click)="open(info[col].val)">{{info[col].val}}</a>
            <span [attr.title]="info[col]"
                  *ngIf="info[col] === null || info[col].isHighlight == undefined"
                  class="wk-text-overflow">{{info[col]}}</span>
          </td>
        </tr>
      </ng-container>
      
      <tr *ngIf="!(bindingData.length > 0)">
        <td colspan="13" align="center">There are no entries in this list.</td>
      </tr>
    </tbody>
  </table>
</div>

  `,
})
export class RecordsListComponent {
  @Input("bindingData") bindingData: any[];
  @Input("headers") headers: any[];

  @Output() openModal: EventEmitter<string> = new EventEmitter<string>();

  open(debtorName) {
    this.openModal.emit(debtorName);
  }
}
