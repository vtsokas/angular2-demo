import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'grid-demo',
  template: `
    <div>
      <h3>Single Row Selection</h3>
      <div style='float:left;width:75%'>
        <datatable
          class="material"
          [rows]="rows"
          [columnMode]="'force'"
          [columns]="columns"
          [headerHeight]="50"
          [footerHeight]="50"
          [rowHeight]="'auto'"
          [limit]="5"
          [selected]="selected"
          [selectionType]="'single'"
          (activate)="onActivate($event)"
          (select)='onSelect($event)'>
        </datatable>
      </div>

      <div class='selected-column'>
        <h4>Selections</h4>
        <ul>
          <li *ngFor='let sel of selected'>
            {{sel.name}}
          </li>
          <li *ngIf="!selected.length">No Selections</li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: [
    // 'node_modules/angular2-data-table/release/datatable.css',
    // 'node_modules/angular2-data-table/release/material.css'
  ]
})
export class GridComponent {

  rows: any[] = [];

  selected:any[] = [];

  columns: any[] = [
    { prop: 'name'} ,
    { name: 'Company' },
    { name: 'Gender' }
  ];

  constructor() {
    this.fetch((data:any) => {
      this.rows = data;
    });
  }

  fetch(cb:any) {
    const req = new XMLHttpRequest();
    req.open('GET', `node_modules/angular2-data-table/assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }:any) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event:any) {
    console.log('Activate Event', event);
  }

}
