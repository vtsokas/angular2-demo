import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeroViewService{

  private messageQueue = new Subject<string>();
  messageQueue$ = this.messageQueue.asObservable();
  /**
   * Actually, we just push a message to the source
   * that triggers the observer to take new selected
   * data from where he knows to
   */
  heroSelectionChanged(): void {
    this.messageQueue.next('heroSelectionChanged');
  }
}
