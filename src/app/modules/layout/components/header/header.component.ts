import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser  } from 'ng4-social-login';
import { AngularFireAuth } from "@angular/fire/auth";

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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
  defaultImage: string = "../../../../../assets/images/user-default-image.png";
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;

  constructor(private getAuthenticationService: AuthenticationService, 
    public authenticationService: AuthenticationService,
    private router: Router, 
    private authService: AuthService, 
    public afAuth: AngularFireAuth,
    private modalService: BsModalService) { }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
 
    this.modalRef.hide();
    this.modalRef = null;
  }
 
  isShown: boolean = false ; // hidden by default


  toggleShow() {
  
  this.isShown = ! this.isShown;
  
  }
  
  ngOnInit() {
    this.logedInUserEmail = localStorage.emailId;
    this.logedInUserName = localStorage.fullName;

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  // Sign out 
  signOut() {
    this.authenticationService.SignOut();
  }

  
  
}
