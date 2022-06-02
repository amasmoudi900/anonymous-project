import { playersTab } from './../../data/playersData';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  id: any;
  findedPlayer: any;
  players = playersTab;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.findedPlayer = this.players.find(
      obj => { return obj.id == this.id }
    );
  }

}
