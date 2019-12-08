import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, TweenMax, Linear, paused} from "gsap/all"; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  //providers: [AuthService]
})
export class LoginComponent implements OnInit {
  userName: string;
  userPassword: string;
  loginForm = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl(''),
  });
  errorMsg: string;
  isErrorMsg: boolean = true;
  //private user: SocialUser;
  private loggedIn: boolean;
  pageNum: string;
  sub: any;


  
  constructor(
     public authService: AuthenticationService,
    // private _auth : AuthenticationService,
    // private authService: AuthService,
    private router : Router, 
    private route : ActivatedRoute,
    ) { }
    
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }
 
  ngOnInit() {


    // this.sub = this.route.queryParamMap
    //    .subscribe(params => {
    //       this.pageNum = params.get('logutValue');
    //       if(this.pageNum === 'Sambhaji'){
    //         this.signOut();
    //         this.router.navigate(['login']);
    //       }
    //   });
    // this.authService.authState.subscribe((user) => {
    //     this.user = user;
    //     this.loggedIn = (user != null);
    //     if (this.loggedIn){
    //       this._auth.isLoggedIn(this.loggedIn, user.name, user.email, true, user.photoUrl);
    //       //this.router.navigate(['dataVizualization']);
    //     }
    //   });
   
  }
 
  onSubmit() {
    this.authService.getAuth(this.loginForm.value).subscribe(data => {
      if (data.Success) {
        this.authService.isLoggedIn_R(data.Success, data.FName, data.EmailID);
        this.router.navigate(['dataVizualization']);
      } else {
        this.authService.isLoggedIn_R(data.Success, data.FName, data.EmailID);
        this.errorMsg = data.Message;
        this.isErrorMsg = data.Success;
      }
    });
  }
  signIn() {
    this.userName = ''; 
    this.userPassword = '';
  }

 
 

}