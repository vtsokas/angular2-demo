import {Component, OnInit, Output} from '@angular/core';
// Services
import { HeroService } from '../../services/hero.service';
import { HeroViewService } from '../../services/hero.view.service';
// Models
import { Hero } from '../../models/hero';

@Component({
  moduleId: module.id,
  selector: 'grid-demo',
  templateUrl: 'grid.component.html',
  providers: [ HeroViewService ]
})
export class GridComponent implements OnInit{

  rows: any[] = [];
  @Output()
  selected:Hero[] = [];
  columns: any[] = [];

  constructor(private heroService: HeroService, private heroViewService: HeroViewService) {}

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

  onSelect({ selected }:any) {    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    this.heroViewService.selectHero(selected);
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
