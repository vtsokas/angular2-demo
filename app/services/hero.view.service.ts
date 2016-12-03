import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeroViewService{

  private selectedHeroesSource = new Subject<IProjectable>();

  selectedHeroes$ = this.selectedHeroesSource.asObservable();

  selectHero(hero:IProjectable[]){console.log(hero);
    this.selectedHeroesSource.next(hero[hero.length - 1]);
  }
}
