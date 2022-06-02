import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Object that will contains email and pwd attributes
  user: any = {};
  // Form Reference
  loginForm:FormGroup;
  x:string = "Login Text";
  constructor(private userService:UserService) { }

  // Executes automatically the code
  ngOnInit() {
  }

  // Called by ngSubmit
  login(){
    console.log('Here my user', this.user);
    this.userService.login(this.user).subscribe(
      (data)=> {
        console.log('Here data after login', data);
        if (data.message != "2") {
          
        } else {
          
        }
      }
    );
  }

}
