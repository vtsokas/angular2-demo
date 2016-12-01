import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Services
import { HeroService } from '../../services/hero.service';
// Models
import { Hero } from '../../models/hero';

import any = jasmine.any;

@Component({
  moduleId: module.id,
  selector: 'grid-demo',
  templateUrl: 'grid.component.html'
})
export class GridComponent implements OnInit{

  rows: any[] = [];
  selected:Hero[] = [];
  columns: any[] = [];

  constructor(private heroService: HeroService) {}

  getHeroes(){
    this.heroService.getHeroes().then(heroes => {
      this.rows = heroes;
      /**
       * Get the column definitions
       * dynamically from first row
       */
      this.columns = this.rows[0].getVisibleProperties()
        .map( (prop:string) => {
          return {name:prop};
        });
    });
  }

  onSelect({ selected }:any) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event:any) {}

  ngOnInit(){
    /**
     * Make the call outside constructor
     * in order not to block the creation
     */
    this.getHeroes();
  }
}
