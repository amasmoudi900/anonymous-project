import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any = [];
  constructor() { }

  ngOnInit() {
    this.players = [
      { id: 1, name: "Messi" },
      { id: 2, name: "Buffon" },
      { id: 3, name: "Iniesta" }
    ]
  }

}
