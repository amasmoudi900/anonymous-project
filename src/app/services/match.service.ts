import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchURL: string = "http://localhost:3000/matches";
  // matchURL: string = "api/allMatches";
  constructor(private httpClient: HttpClient) { }

  // Request to send OBJ to matchURL (BE)
  addMatch(obj) {
    return this.httpClient.post<{ message: string }>(this.matchURL, obj);
  }
  // Request to get all objects from matchURL (BE)
  getAllMatches() {
    return this.httpClient.get<{ matches: any, message: any }>(this.matchURL);
  }
  // Request to search match by team one  matchURL
  searchMatch(obj) {
    return this.httpClient.post(`${this.matchURL}/search`, obj);
  }
  // Request to get object by ID from matchURL/id (BE)
  getMatchById(id) {
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);
    // return this.httpClient.get(this.matchURL + "/" + id)
  }
  // Request to delete object by ID from matchURL/id (BE)
  deleteMatchById(id) {
    return this.httpClient.delete<{ message: string }>(`${this.matchURL}/${id}`);
  }
  // Request to edit object by ID  matchURL/id (BE)
  updateMatch(obj) {
    return this.httpClient.put<{ message: string }>(`${this.matchURL}/${obj._id}`, obj);
  }





}
