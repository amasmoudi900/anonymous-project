import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() X: any;
  constructor() { }

  ngOnInit() {
  }


  teamResult(a, b) {
    if (a < b) {
      return 'red';
    } else if (a > b) {
      return 'green';
    } else {
      return 'blue';
    }
  }

}
