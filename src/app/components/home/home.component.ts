import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  match: any = { id: 1, scoreOne: 1, scoreTwo: 2, teamOne: 'RMD', teamTwo: "FCB" };

  constructor() { }

  ngOnInit() {
  }

}
