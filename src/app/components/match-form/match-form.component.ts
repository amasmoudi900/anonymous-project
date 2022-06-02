import { MatchService } from './../../services/match.service';
import { allMatches } from './../../data/matchesData';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {

  matchId: any;
  matchForm: FormGroup;
  match: any = {};
  matches = allMatches;
  title: string = "Add Match";
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
    private router: Router) { }

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.matchId) {
      this.title = "Edit Match";
      this.matchService.getMatchById(this.matchId).subscribe(
        (data) => {
          this.match = data.match;
        }
      );
    }
  }

  addOrEditMatch() {
    console.log('here my object', this.match);
    if (this.matchId) {
      // Call service to update match object
      this.matchService.updateMatch(this.match).subscribe(
        (data) => {
          console.log('Here data after edit', data.message);
          this.router.navigate(['admin']);
        }
      );
    } else {
      // Call service to send match object to BE
      this.matchService.addMatch(this.match).subscribe(
        (data) => {
          console.log('Here data after add', data.message);
          this.router.navigate(['admin']);
        }
      );
    }
  }

}
