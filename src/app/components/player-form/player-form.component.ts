import { PlayerService } from './../../services/player.service';
import { ActivatedRoute } from '@angular/router';
import { playersTab } from './../../data/playersData';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  playerForm: FormGroup;
  player: any = {};
  playerId: any;
  players: any = playersTab;
  title: string = "Add Player";
  imagePreview: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      name: [''],
      nbr: [''],
      position: [''],
      age: [''],
      img: ['']
    })
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.playerId) {
      this.title = "Edit Player";
      this.playerService.getPlayerById(this.playerId).subscribe(
        (data) => {
          this.player = data.player;
        }
      )
    }
  }

  addOrEditPlayer() {
    if (this.playerId) {
      // Edit player
      this.playerService.editPlayer(this.player).subscribe(
        (data) => {
          console.log('data after edit', data.message);

        }
      );
    } else {
      // Add Player
      this.playerService.addPlayer(this.player, this.playerForm.value.img).subscribe(
        (data) => {
          console.log('data after save', data.message);

        }
      );
    }
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here file', file);

    this.playerForm.patchValue({ img: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
