import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  msgError: string;
  constructor(
    private X: FormBuilder,
    private userService: UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupForm = this.X.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      email: [''],
      pwd: ['']
    })
  }

  signup() {
    console.log('Signup clicked', this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (data) => {
        console.log('Here data after signup', data);
        if (data.message == "0") {
          this.msgError = "Email Exists";
        } else {
          this.router.navigate(['']);
        }
      }
    );
  }

}
