import { MatchService } from './../../services/match.service';
import { allMatches } from './../../data/matchesData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  title: string = "Match Information";
  matchId: any;
  matches: any = allMatches;
  findedMatch: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService:MatchService) { }

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.matchId).subscribe(
      (data)=>{
        console.log('Here data', data.match);
        this.findedMatch = data.match;
      }
    );
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id == this.matchId) {
    //     this.findedMatch = this.matches[i];
    //     break;
    //   }
    // }
    // this.findedMatch = this.matches.find(
    //   (obj:any) => { return obj.id == this.matchId }
    // );
  }

}
