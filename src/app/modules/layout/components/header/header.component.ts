import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser  } from 'ng4-social-login';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  logedInUserEmail: string;
  logedInUserName: string;
  private user: SocialUser;
  private loggedIn: boolean;
  


  constructor(private getAuthenticationService: AuthenticationService, private router: Router, private authService: AuthService) { }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    this.logedInUserEmail = localStorage.emailId;
    this.logedInUserName = localStorage.fullName;

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  signOut_1(): void {
    this.router.navigate(['/login'], { queryParams: { logutValue: 'Sambhaji' } });
    //this.getAuthenticationService.isLoggedOut(JSON.parse(localStorage.withGoogle));
    
  }
  
}
