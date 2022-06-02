import { MatchService } from './../../services/match.service';
import { Router } from '@angular/router';
import { allMatches } from './../../data/matchesData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches: any = [];
  title: string;
  pageOfItems: Array<any>;
  constructor(
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {
    // this.matches = allMatches;
    this.allMatches();
  }

  goToDisplay(x: number) {
    this.router.navigate([`matchInfo/${x}`]);
  }

  goToEdit(x: number) {
    this.router.navigate([`editMatch/${x}`]);
  }

  deleteMatchById(x) {
    this.matchService.deleteMatchById(x).subscribe(
      (data) => {
        console.log('Here after delete', data.message);
        //MAJ
        this.allMatches();
      }
    );
  }

  allMatches() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.matches;
      }
    )
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
