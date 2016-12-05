import {Component, OnInit, Output} from '@angular/core';
// Services
import { HeroService } from '../../services/hero.service';
import { HeroViewService } from '../../services/hero.view.service';
import { Hero } from '../../models/hero';

@Component({
  moduleId: module.id,
  selector: 'grid-demo',
  templateUrl: 'grid.component.html',
  providers: [ HeroViewService ]
})
export class GridComponent implements OnInit{

  rows: any[] = [];
  temp: any[] = [];
  @Output()
  selected:Hero[] = [];
  columns: any[] = [];

  constructor(private heroService: HeroService, private heroViewService: HeroViewService) {}

  getHeroes(){
    this.heroService.getHeroes().then(heroes => {
      this.rows = heroes;
      this.temp = [...heroes];
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

    this.heroViewService.heroSelectionChanged();
  }

  onActivate(event:any) {}

  updateFilter(event:any) {
    let val = event.target.value;

    // filter our data
    let temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }

  ngOnInit(){
    /**
     * Make the call outside constructor
     * in order not to block the creation
     */
    this.getHeroes();
  }
}
