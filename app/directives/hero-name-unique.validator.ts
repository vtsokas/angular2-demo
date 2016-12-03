import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import {HeroService} from "../services/hero.service";

/**
 * This method is used for asynchronous validation
 */
function validateHeroNameUniqueFactory(heroService: HeroService){
  return (c: FormControl):  Promise<any> =>  {console.log(c);
    return new Promise( (resolve, reject) => {
      heroService.isHeroNameUnique(c.value, c.parent.value.id)
        .then( hero => {
          resolve( (!hero) ? null : {
            validateHeroNameUnique: {
              valid: false
            }
          })
        });
    } );
  };
}

@Directive({
  selector: '[validateHeroNameUnique][ngModel],[validateHeroNameUnique][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => HeroNameUniqueValidator), multi: true }
  ]
})
export class HeroNameUniqueValidator {

  validator: Function;

  constructor(heroService: HeroService) {
    this.validator = validateHeroNameUniqueFactory(heroService);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}
