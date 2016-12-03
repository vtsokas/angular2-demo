import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Hero } from "../../models/hero";
import { HeroService } from "../../services/hero.service";
import 'rxjs/add/operator/switchMap';
import {HeroNameUniqueValidator} from "../../directives/hero-name-unique.validator";

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent implements OnInit{
  @Input()
  hero: Hero;

  public heroForm: FormGroup;
  public submitted: boolean;

  constructor(
    private _fb: FormBuilder,
    private heroService: HeroService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.heroForm = this._fb.group({
      id: [-1, <any>Validators.nullValidator],
      name: ['',
        //Synchronous
        [
          <any>Validators.required,
        ],
        //Asynchronous
        /**
         * @todo
         * I don't like this instantiation
         */
        new HeroNameUniqueValidator(this.heroService).validator
      ],
      strength:  [0, <any>Validators.nullValidator],
      speed:  [0, <any>Validators.nullValidator],
      stealth:  [0, <any>Validators.nullValidator],
      intelligence:  [0, <any>Validators.nullValidator]
    });
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe( hero => {
        if(!!hero){
          (<FormGroup>this.heroForm).setValue(hero, {onlySelf:true});
        }
      } );
  }

  save(model: HeroInterface, isValid: boolean){
    this.submitted = true;
    console.log(new Hero(model),isValid);
  }
}
