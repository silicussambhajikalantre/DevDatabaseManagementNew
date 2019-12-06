import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service'




@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthenticationService,
    public router: Router
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in'])
    }
    return true;
  }
}
