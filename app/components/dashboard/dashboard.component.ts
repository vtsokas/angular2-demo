import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../services/hero.service";
import { Hero } from "../../models/hero";

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroesService: HeroService){}

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
}
