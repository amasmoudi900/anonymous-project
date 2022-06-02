import { Router } from '@angular/router';
import { allMatches } from './../../data/matchesData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any = [];
  teamToFind: any;
  findedMatches: any = [];
  path:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.path = this.router.url;
    // teamToFind = {team: "valeur tapée ds le component search"}
    this.teamToFind = JSON.parse(localStorage.getItem('teamToFind'));

    this.matches = allMatches;
    // search object by teamOne or teamTwo
    // Push finded objects into array findedMatches
    for (let i = 0; i < this.matches.length; i++) {
      if ((this.matches[i].teamOne == this.teamToFind.team) ||
        (this.matches[i].teamTwo == this.teamToFind.team)) {
        this.findedMatches.push(this.matches[i]);
      }
    }
    // Condition
    if (this.path == "/allMatches/search") {
      this.matches = this.findedMatches;
    }

  }

}
