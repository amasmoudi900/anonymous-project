import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {

  searchForm: FormGroup;
  obj: any = {};
  constructor(private router:Router) { }

  ngOnInit() {
  }

  search(){
    localStorage.setItem('teamToFind', JSON.stringify(this.obj));
    this.router.navigate(['allMatches/search']);
  }

}
