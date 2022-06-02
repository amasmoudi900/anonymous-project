import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm: FormGroup;
  team: any = {};
  constructor() { }

  ngOnInit() {
  }
  addTeam(){
    console.log('Here my object', this.team);
  }

}
