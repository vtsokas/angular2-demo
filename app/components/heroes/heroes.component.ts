import { Component } from '@angular/core';
import { Hero } from   '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})
export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ){}

  /**
   * Create a method in order to choose
   * when the initialization happens
   */
  getHeroes(){
    this.heroService.getHeroes().then(heroes => {this.heroes = heroes;console.log(this.heroes);});
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void{
    /**
     * Don't call in the constructor a method
     * with unstable job to do (such as AJAX)
     */
    this.getHeroes();
  }
}
