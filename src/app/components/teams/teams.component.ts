import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  // teams: déclaration d'une variable de type 
  // any intialement un tableau vide
  x: string = "9";
  y: number = 9;
  isValid: boolean = false;
  constructor() { }

  // ngOnInit: Methode qui s'execute automatiquement 
  // lors de l'appel du component à travers son selector
  ngOnInit() {
    
  }

}
