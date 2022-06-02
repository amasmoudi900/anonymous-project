import { PlayerService } from './../../services/player.service';
import { Router } from '@angular/router';
import { playersTab } from './../../data/playersData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  players: any = [];
  constructor(
    private myRouter: Router,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data.allPlayers;
      }
    )
  }

  goToDisplayPlayer(x: number) {
    this.myRouter.navigate([`playerInfo/${x}`]);
  }

  goToEditPlayer(playerId: number) {
    this.myRouter.navigate([`editPlayer/${playerId}`]);
  }

}
