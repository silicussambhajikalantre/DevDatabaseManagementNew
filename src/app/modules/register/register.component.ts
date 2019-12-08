import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../core/services/authentication.service';
import { GetUsersService } from '../../core/services/get-users.service'
import { AlertService } from '../../core/services/alert.service'
import { MustMatch } from '../../core/helpers/must-match.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newInsertUsers: FormGroup;
  loading = false;
  submitted = false;
  showMainContent: Boolean = true;
  errorMsg: string;
  isErrorMsg: any;

  
 
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: GetUsersService,
      private AlertService : AlertService,
     
  ) { 
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //     this.router.navigate(['/']);
      // }
  }
  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
 }
  ngOnInit() {
      this.newInsertUsers = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        userName: ['', Validators.required],
        emailId: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        phoneNumber: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.newInsertUsers.controls; }

  onSubmit() {
      this.submitted = true;

      
      // stop here if form is invalid
      if (this.newInsertUsers.invalid) {
          return;
      }

      this.userService.newInsertUsers(this.newInsertUsers.value)
      .subscribe(data => {
      
        this.errorMsg = data['Message'];
        this.isErrorMsg = data['Success'];
        console.log(data);
       
       });
  }
}
