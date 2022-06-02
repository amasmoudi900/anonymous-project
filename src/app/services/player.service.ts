import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL: string = "http://localhost:3000/players";
  constructor(private httpClient: HttpClient) { }

  addPlayer(playerObj, img: File) {
    let formData = new FormData();
    formData.append('name', playerObj.name);
    formData.append('nbr', playerObj.nbr);
    formData.append('position', playerObj.position);
    formData.append('age', playerObj.age);
    formData.append('img', img);
    return this.httpClient.post<{ message: string }>(this.playerURL, formData);
  }

  getAllPlayers() {
    return this.httpClient.get<{ allPlayers: any }>(this.playerURL);
  }

  getPlayerById(id) {
    return this.httpClient.get<{ player: any }>(`${this.playerURL}/${id}`);
  }

  deletePlayerById(id) {
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }

  editPlayer(newPlayer) {
    return this.httpClient.put<{ message: string }>(`${this.playerURL}/${newPlayer._id}`, newPlayer);
  }


}
