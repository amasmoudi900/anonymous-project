import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  actualDate: Date;
  title: string = "dashboard admin";
  constructor(private router: Router) { }

  ngOnInit() {
    this.actualDate = new Date();
  }

}
