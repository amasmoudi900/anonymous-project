import { teamsTab } from './../../data/teamsData';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams: any = [];
  path: string;
  isDisplayed: boolean = false;
  searchForm: FormGroup;
  obj: any = {};
  findedTeams: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    if (this.path == "/admin") {
      this.isDisplayed = true;
    }
    this.teams = teamsTab;
  }

  search() {
    this.teams = teamsTab;
    this.findedTeams = [];
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].stadium == this.obj.stadium) {
        this.findedTeams.push(this.teams[i]);
      }
    }
    this.teams = this.findedTeams;
  }

}
