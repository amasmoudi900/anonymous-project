import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let allMatches = [
      { id: 1, scoreOne: 1, scoreTwo: 2, teamOne: 'RMD', teamTwo: "FCB" },
      { id: 2, scoreOne: 2, scoreTwo: 0, teamOne: 'SEV', teamTwo: "ATM" },
      { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: 'JUV', teamTwo: "RMD" },
      { id: 4, scoreOne: 0, scoreTwo: 3, teamOne: 'AC', teamTwo: "ROM" }
    ];
    let allTeams = [
      { id: 1, scoreOne: 1, scoreTwo: 2, teamOne: 'RMD', teamTwo: "FCB" },
      { id: 2, scoreOne: 2, scoreTwo: 0, teamOne: 'SEV', teamTwo: "ATM" },
      { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: 'JUV', teamTwo: "RMD" },
      { id: 4, scoreOne: 0, scoreTwo: 3, teamOne: 'AC', teamTwo: "ROM" }
    ];

    return { allMatches,  allTeams };

  }
}
