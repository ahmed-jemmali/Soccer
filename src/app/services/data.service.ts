import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let matches = [
      { id: 1, teamOne: 'real madrid', teamTwo: 'barcelona', scoreOne: 4, scoreTwo: 2 },
      { id: 2, teamOne: 'bayern', teamTwo: 'chelsea', scoreOne: 8, scoreTwo: 2 },
      { id: 3, teamOne: 'ATM', teamTwo: 'PSG', scoreOne: 1, scoreTwo: 1 },
      { id: 4, teamOne: 'ATM', teamTwo: 'real madrid ', scoreOne: 1, scoreTwo: 4 },
    ];

    let players = [
      { id: 1, name: 'cristiano', poste: 'attaquant', numero: 7, age: 36 },
      { id: 2, name: 'messi', poste: 'attaquant', numero: 10, age: 34 },
      { id: 3, name: 'ramos', poste: 'défenseur', numero: 4, age: 35 },
      { id: 4, name: 'salah', poste: 'attaquant', numero: 11, age: 38 },
    ];

    let teams = [
      { id: 1, name: 'barcelona', foundation: 'ahmed', stadium: 'camp nou' },
      { id: 2, name: 'real madrid', foundation: 'mohamed', stadium: 'camp nou' },
      { id: 3, name: 'chelsea', foundation: 'ali', stadium: 'camp nou' },
      { id: 4, name: 'bayern', foundation: 'hbib', stadium: 'camp nou' },
    ];

    return { matches,players,teams };

  }
}
