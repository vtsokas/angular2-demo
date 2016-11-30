import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../../models/hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ '../dashboard/dashboard.component.css' ]
})
export class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    /**
     * switchMap() maps the id of the Observable route params to a
     * new Observable, the result of heroService.getHero
     */
    this.route.params
      /**
       * If the user re-navigates, switchMap cancels the previous call
       */
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      /**
       * We don't need to un-subscribe
       */
      .subscribe(hero => this.hero = hero)
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
      this.location.back();
  }
}
