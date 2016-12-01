import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice', strength: 10, intelligence: 30, stealth: 50, speed: 10},
      {id: 12, name: 'Narco', strength: 30, intelligence: 20, stealth: 40, speed: 10},
      {id: 13, name: 'Bombasto', strength: 10, intelligence: 40, stealth: 10, speed: 40},
      {id: 14, name: 'Celeritas', strength: 30, intelligence: 10, stealth: 20, speed: 40},
      {id: 15, name: 'Magneta', strength: 30, intelligence: 10, stealth: 30, speed: 30},
      {id: 16, name: 'RubberMan', strength: 20, intelligence: 20, stealth: 20, speed: 40},
      {id: 17, name: 'Dynama', strength: 20, intelligence: 30, stealth: 20, speed: 30},
      {id: 18, name: 'Dr IQ', strength: 10, intelligence: 70, stealth: 10, speed: 10},
      {id: 19, name: 'Magma', strength: 20, intelligence: 20, stealth: 30, speed: 30},
      {id: 20, name: 'Tornado', strength: 10, intelligence: 10, stealth: 10, speed: 70}
    ];
    return {heroes};
  }
}
